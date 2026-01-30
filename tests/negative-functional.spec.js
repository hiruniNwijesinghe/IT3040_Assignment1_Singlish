const { test, expect } = require('@playwright/test');

/*
  Negative Functional Test Cases
  Option 1: Singlish -> Sinhala
  Application: Swift Translator
*/

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

async function enterText(page, text) {
  await page.locator('textarea').fill(text);
  // App should still render Sinhala section
  await expect(page.locator('body')).toContainText('Sinhala');
}

test('Neg_Fun_0001 - Empty input', async ({ page }) => {
  await page.locator('textarea').fill('');
  await expect(page.locator('body')).toContainText('Singlish');
});

test('Neg_Fun_0002 - Only spaces input', async ({ page }) => {
  await enterText(page, '     ');
  await expect(page.locator('body')).toContainText('Sinhala');
});

test('Neg_Fun_0003 - Numeric input only', async ({ page }) => {
  await enterText(page, '1234567890');
  await expect(page.locator('body')).toContainText('123');
});

test('Neg_Fun_0004 - Special characters only', async ({ page }) => {
  await enterText(page, '@#$%^&*()_+');
  await expect(page.locator('body')).toContainText('@');
});

test('Neg_Fun_0005 - English sentence instead of Singlish', async ({ page }) => {
  await enterText(page, 'I am going to school today.');
  await expect(page.locator('body')).toContainText('I am');
});

test('Neg_Fun_0006 - Mixed random characters', async ({ page }) => {
  await enterText(page, 'abc123@@@###');
  await expect(page.locator('body')).toContainText('abc');
});

test('Neg_Fun_0007 - Unsupported language characters', async ({ page }) => {
  await enterText(page, 'こんにちは');
  await expect(page.locator('body')).toContainText('こんにちは');
});

test('Neg_Fun_0008 - Emoji input', async ({ page }) => {
  await enterText(page, '😀😂🔥');
  await expect(page.locator('body')).toContainText('😀');
});

test('Neg_Fun_0009 - Very long string input', async ({ page }) => {
  const longText = 'mama '.repeat(200);
  await enterText(page, longText);
  await expect(page.locator('body')).toContainText('Sinhala');
});

test('Neg_Fun_0010 - SQL injection like input', async ({ page }) => {
  await enterText(page, "' OR '1'='1");
  await expect(page.locator('body')).toContainText('1');
});
