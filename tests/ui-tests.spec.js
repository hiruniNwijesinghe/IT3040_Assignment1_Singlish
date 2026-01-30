const { test, expect } = require('@playwright/test');

/*
  UI Test Cases
  Application: Singlish ↔ English Translator
*/

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

test('UI_001 - Page loads successfully', async ({ page }) => {
  await expect(page).toHaveTitle(/Singlish/i);
  await expect(page.locator('body')).toBeVisible();
});

test('UI_002 - Singlish input textarea is visible and enabled', async ({ page }) => {
  const textarea = page.locator('textarea');
  await expect(textarea).toBeVisible();
  await expect(textarea).toBeEnabled();
});

test('UI_003 - Sinhala output label is present', async ({ page }) => {
  await expect(page.locator('body')).toContainText('Sinhala');
});

test('UI_004 - Translate button exists in DOM', async ({ page }) => {
  const translateButton = page.locator('button[aria-label="Translate"]');
  await expect(translateButton).toHaveCount(1);
});

test('UI_005 - Translate button activates after user input', async ({ page }) => {
  const textarea = page.locator('textarea');
  const translateButton = page.locator('button[aria-label="Translate"]');

  await textarea.fill('oya enna');
  await expect(translateButton).toBeEnabled();
});

test('UI_006 - Clear button exists', async ({ page }) => {
  const clearButton = page.locator('button', { hasText: 'Clear' });
  await expect(clearButton).toHaveCount(1);
});

test('UI_007 - Virtual Sinhala keyboard is displayed', async ({ page }) => {
  await expect(page.locator('body')).toContainText('අ');
  await expect(page.locator('body')).toContainText('ක');
});

test('UI_008 - Typing language switch option is available', async ({ page }) => {
  await expect(page.locator('body')).toContainText('Switch Typing Language');
});

test('UI_009 - Features section is visible', async ({ page }) => {
  await expect(page.locator('body')).toContainText('Features');
});
