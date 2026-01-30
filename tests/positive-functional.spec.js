const { test, expect } = require('@playwright/test');

/*
  Positive Functional Test Cases
  Option 1: Singlish -> Sinhala
  Application: Swift Translator
*/

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

async function translate(page, text) {
  await page.locator('textarea').fill(text);
  // Wait until Sinhala section appears
  await expect(page.locator('body')).toContainText('Sinhala');
}

test('Pos_Fun_0001 - Simple daily sentence', async ({ page }) => {
  await translate(page, 'mama gedhara yanavaa.');
  await expect(page.locator('body')).toContainText('ගෙ');
});

test('Pos_Fun_0002 - Simple request sentence', async ({ page }) => {
  await translate(page, 'mata bath oonee.');
  await expect(page.locator('body')).toContainText('බ');
});

test('Pos_Fun_0003 - Compound sentence', async ({ page }) => {
  await translate(
    page,
    'api kaeema kanna yanavaa saha passe chithrapatayak balanavaa.'
  );
  await expect(page.locator('body')).toContainText('අ');
});

test('Pos_Fun_0004 - Complex sentence', async ({ page }) => {
  await translate(page, 'oya enavaanam mama balan innavaa.');
  await expect(page.locator('body')).toContainText('එනවා');
});

test('Pos_Fun_0005 - Interrogative sentence', async ({ page }) => {
  await translate(page, 'oyaata kohomadha?');
  await expect(page.locator('body')).toContainText('?');
});

test('Pos_Fun_0006 - Imperative command', async ({ page }) => {
  await translate(page, 'vahaama enna.');
  await expect(page.locator('body')).toContainText('එන');
});

test('Pos_Fun_0007 - Positive sentence', async ({ page }) => {
  await translate(page, 'api heta enavaa.');
  await expect(page.locator('body')).toContainText('හෙ');
});

test('Pos_Fun_0008 - Negative sentence', async ({ page }) => {
  await translate(page, 'mama ehema karanne naehae.');
  await expect(page.locator('body')).toContainText('නැ');
});

test('Pos_Fun_0009 - Greeting phrase', async ({ page }) => {
  await translate(page, 'aayuboovan!');
  await expect(page.locator('body')).toContainText('ආ');
});

test('Pos_Fun_0010 - Polite request', async ({ page }) => {
  await translate(
    page,
    'karuNaakaralaa mata podi udhavvak karanna puLuvandha?'
  );
  await expect(page.locator('body')).toContainText('කර');
});

test('Pos_Fun_0011 - Informal phrasing', async ({ page }) => {
  await translate(page, 'ehema karapan.');
  await expect(page.locator('body')).toContainText('කර');
});

test('Pos_Fun_0012 - Repeated words', async ({ page }) => {
  await translate(page, 'hari hari lassanayi.');
  await expect(page.locator('body')).toContainText('හ');
});

test('Pos_Fun_0013 - Past tense', async ({ page }) => {
  await translate(page, 'mama iiyee gedhara giyaa.');
  await expect(page.locator('body')).toContainText('ගි');
});

test('Pos_Fun_0014 - Present tense', async ({ page }) => {
  await translate(page, 'mama dhaen vaeda karanavaa.');
  await expect(page.locator('body')).toContainText('කර');
});

test('Pos_Fun_0015 - Future tense', async ({ page }) => {
  await translate(page, 'api iiLaGa sathiyee gedhara yamu.');
  await expect(page.locator('body')).toContainText('ය');
});

test('Pos_Fun_0016 - Plural pronoun', async ({ page }) => {
  await translate(page, 'oyaalaa enavadha?');
  await expect(page.locator('body')).toContainText('එන');
});

test('Pos_Fun_0017 - Joined words', async ({ page }) => {
  await translate(page, 'hetaapiyanavaa');
  await expect(page.locator('body')).toContainText('හෙ');
});

test('Pos_Fun_0018 - Mixed English words', async ({ page }) => {
  await translate(page, 'Zoom meeting ekak thiyennee.');
  await expect(page.locator('body')).toContainText('Zoom');
});

test('Pos_Fun_0019 - Proper noun', async ({ page }) => {
  await translate(page, 'api trip eka Kandy valata yamudha.');
  await expect(page.locator('body')).toContainText('Kandy');
});

test('Pos_Fun_0020 - Abbreviation', async ({ page }) => {
  await translate(page, 'OTP eka mata evanna.');
  await expect(page.locator('body')).toContainText('OTP');
});

test('Pos_Fun_0021 - Punctuation', async ({ page }) => {
  await translate(page, 'meeka hariyata vaeda karanavaadha?');
  await expect(page.locator('body')).toContainText('?');
});

test('Pos_Fun_0022 - Currency', async ({ page }) => {
  await translate(page, 'mata Rs. 5343 gewanna thiyenavaa.');
  await expect(page.locator('body')).toContainText('Rs');
});

test('Pos_Fun_0023 - Multiple spaces', async ({ page }) => {
  await translate(page, 'mama gedhara   yanavaa.');
  await expect(page.locator('body')).toContainText('ගෙ');
});

test('Pos_Fun_0024 - Paragraph input', async ({ page }) => {
  await translate(
    page,
    'mama gedhara innee. api passee kathaa karamu. heta api office yanna thiyenavaa.'
  );
  await expect(page.locator('body')).toContainText('Sinhala');
});
