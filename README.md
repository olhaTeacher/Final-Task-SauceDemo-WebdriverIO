# Final Task – Dynamic Content

## Project Description

This project contains automated UI tests for the SauceDemo application using WebDriverIO.

The project demonstrates:

- Page Object Model (POM)
- Dynamic element handling
- CSS and XPath locators
- Parallel execution in multiple browsers
- Simple custom logging

## Implemented Test Scenarios

### UC-1 Product Details Verification

- Login with `standard_user`
- Open a selected product details page
- Verify that the product price matches the Inventory page
- Verify that the product description matches the Inventory page
- Add the product to the cart

### UC-2 Footer & Social Links

- Scroll to the page footer
- Verify Twitter, Facebook and LinkedIn links
- Verify social links URLs

---

## Tech Stack

- Node.js
- WebDriverIO
- Mocha
- Page Object Model (POM)
- Spec Reporter
- Allure Reporter

---

## Project Structure

```
test
│
├── pageobjects
│   ├── base.page.js
│   ├── login.page.js
│   ├── inventory.page.js
│   └── product.page.js
│
├── pagedata
│   └── product.data.js
│
├── specs
│   └── dynamicContent.e2e.js
│
└── utils
    └── logger.js
```

---

## Installation

Install project dependencies:

```bash
npm install
```

---

## Run Tests

Run all tests:

```bash
npm run wdio
```

---

## Browser Configuration

Tests are executed in parallel on:

- Microsoft Edge
- Firefox

---

## Reporting

The project uses:

- **Spec Reporter** – displays test execution results in the console.
- **Allure Reporter** – stores test execution results in the `allure-results` directory.

---

## Logging

A simple custom logger is used to display the product currently being verified.

Example:

```
[INFO] Verify product: Sauce Labs Fleece Jacket
```

---

## Notes

- The project follows the **Page Object Model (POM)** design pattern.
- Product data is parameterized using `product.data.js`.
- Both CSS and XPath locators are used according to the task requirements.