# IT3040 – Assignment 01: Test Automation Using Playwright

## 📌 Project Title

Singlish → Sinhala Translator Automation Testing

---

## 👤 Student Information

* **Course Code:** IT3040 – Software Quality Assurance
* **Assignment:** 01
* **Automation Tool:** Playwright
* **Testing Approach:** End-to-End UI Automation

---

## 🎯 Assignment Objective

The objective of this assignment is to design and implement automated test cases for a web-based application using **Playwright**, covering:

* Positive Functional Testing
* Negative Functional Testing
* User Interface (UI) Testing

The selected application is an **AI-based Singlish ↔ Sinhala Translator**, which converts Singlish text into Sinhala.

---

## 🌐 Application Under Test (AUT)

* **Application Name:** Swift Translator
* **URL:** [https://www.swifttranslator.com/](https://www.swifttranslator.com/)
* **Selected Option:** Option 1 – Singlish → Sinhala Translation

---

## 🛠 Tools & Technologies Used

* **Node.js**
* **Playwright Test Framework**
* **JavaScript**
* **Microsoft Excel** (for manual test cases)

---

## 📁 Project Folder Structure

```
IT3040_Assignment1_Singlish
│
├── tests
│   ├── positive-functional.spec.js
│   ├── negative-functional.spec.js
│   └── ui-tests.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
├── test-results
└── playwright-report
```

---

## ✅ Test Types Implemented

### 1️⃣ Positive Functional Tests

**File:** `positive-functional.spec.js`

* Valid Singlish sentences
* Grammar variations (past, present, future)
* Questions, commands, greetings
* Paragraph-level input

**Validation Method:**

* Sinhala output section appears
* Relevant translated content is displayed

---

### 2️⃣ Negative Functional Tests

**File:** `negative-functional.spec.js`

* Empty input
* Only spaces
* Numbers only
* Special characters
* Emojis
* Unsupported languages
* SQL-like injection strings

**Validation Method:**

* Application does not crash
* UI remains stable
* Input is handled gracefully

---

### 3️⃣ UI Tests

**File:** `ui-tests.spec.js`

* Page load verification
* Input textarea visibility
* Translate button existence and activation
* Clear button availability
* Sinhala virtual keyboard presence
* Feature and language switch visibility

---

## ▶️ How to Run the Tests

### 🔹 Install Dependencies

```bash
npm install
```

### 🔹 Install Playwright Browsers

```bash
npx playwright install
```

### 🔹 Run All Tests

```bash
npx playwright test
```

### 🔹 Run Individual Test Files

**Positive Functional Tests**

```bash
npx playwright test tests/positive-functional.spec.js
```

**Negative Functional Tests**

```bash
npx playwright test tests/negative-functional.spec.js
```

**UI Tests**

```bash
npx playwright test tests/ui-tests.spec.js
```

---

## 📊 Test Case Documentation

Manual test cases are documented in the Excel file:

📄 **Final_Test_Cases.xlsx**

This file contains:

* Positive Functional Test Cases
* Negative Functional Test Cases
* UI Test Cases
* Mapping between manual and automated tests

---

## 🌍 Cross-Browser Testing

All automated tests were successfully executed on:

* Chromium
* Firefox
* WebKit

---

## 🧠 Key Considerations

* Assertions are **behavior-based**, not AI-output dependent
* Stable selectors are used to avoid flaky tests
* Conditional UI elements are validated correctly

---

## 🏁 Conclusion

This project demonstrates the effective use of **Playwright** for automated testing of a real-world AI-powered web application. The test suite ensures application reliability through functional, negative, and UI testing, while maintaining cross-browser compatibility.

---

## 📎 References

1. [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)
2. [https://playwright.dev/community/learn-videos](https://playwright.dev/community/learn-videos)

---

**End of README**
