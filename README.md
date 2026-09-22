# Apollo QA Automation

## Overview

This project was created as part of the **Apollo Green Solutions QA Automation Internship Technical Assessment**.

The objective of this project is to demonstrate practical skills in:

* Manual software testing
* API testing with Postman
* Web test automation with Playwright
* Bug identification and documentation
* Automated test organization
* Git and GitHub version control

The automated tests are based on the **Practice Software Testing** web application.

---

## Technologies Used

* **Playwright** — Web test automation
* **JavaScript** — Test implementation
* **Postman** — API testing
* **Git** — Version control
* **GitHub** — Source code management
* **Node.js / npm** — Project environment

---

## Project Structure

```text
Apollo-QA-Automation/
│
├── tests/
│   ├── cart.spec.js
│   ├── login.spec.js
│   └── shopping-flow.spec.js
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── playwright.config.js
```

The following generated folders are intentionally excluded from GitHub:

* `node_modules/`
* `playwright-report/`
* `test-results/`

---

# 1. Manual Testing

The application was explored manually as a new user.

A total of **10 manual test cases** were created covering:

* Normal user workflows
* Invalid inputs
* Boundary and edge cases
* Authentication
* Registration
* Shopping cart
* Product sorting
* Checkout and payment

Each test case contains:

* Test Case ID
* Description
* Test Steps
* Expected Result
* Actual Result
* Status

## Manual Test Results

| Test Case | Feature                         | Status |
| --------- | ------------------------------- | ------ |
| TC-001    | Google Sign-In                  | Failed |
| TC-002    | Date of Birth Validation        | Passed |
| TC-003    | Existing Email Validation       | Passed |
| TC-004    | Postal Code Validation          | Failed |
| TC-005    | Country Validation              | Failed |
| TC-006    | Phone Number Validation         | Failed |
| TC-007    | Shopping Cart Quantity / Remove | Failed |
| TC-008    | Add to Cart                     | Failed |
| TC-009    | Product Sorting / Category      | Failed |
| TC-010    | Checkout / Payment              | Failed |

### Summary

**8 test cases failed and 2 test cases passed.**

The failed cases were documented as bugs with their corresponding evidence and screenshots in the manual testing report.

---

# 2. API Testing

API testing was performed using **Postman**.

The API testing collection is based on **ReqRes**.

The collection contains tests for different HTTP methods and response scenarios.

## API Test Cases

| Test Case | Method | Endpoint            | Expected Status |
| --------- | ------ | ------------------- | --------------- |
| TC-API-01 | GET    | `/api/users?page=1` | 200             |
| TC-API-02 | GET    | `/api/users?page=2` | 200             |
| TC-API-03 | GET    | `/api/users/23`     | 404             |
| TC-API-04 | POST   | `/api/users`        | 201             |
| TC-API-05 | DELETE | `/api/users/2`      | 204             |

The API tests verify:

* HTTP status codes
* Response data
* User data
* Error responses
* Resource creation
* Resource deletion

---

# 3. Playwright Automation

The web automation part of the project was implemented using **Playwright**.

The automated tests cover important user workflows such as:

### Login

The login tests verify authentication-related behavior and invalid login scenarios.

### Shopping Cart

The cart tests verify operations such as:

* Adding products to the cart
* Changing quantities
* Removing products
* Checking cart behavior

### Shopping Flow

The shopping-flow tests cover a complete user journey through different parts of the application.

---

# 4. Running the Project

## Install Dependencies

Clone the repository and install the project dependencies:

```bash
npm install
```

Install the required Playwright browsers:

```bash
npx playwright install
```

---

## Run All Tests

To run all Playwright tests:

```bash
npx playwright test
```

---

## Run Tests in Headed Mode

To see the browser while the tests are running:

```bash
npx playwright test --headed
```

---

## Run a Specific Test File

For example:

```bash
npx playwright test tests/login.spec.js
```

or:

```bash
npx playwright test tests/cart.spec.js
```

or:

```bash
npx playwright test tests/shopping-flow.spec.js
```

---

## View the HTML Report

After running the tests, generate or open the Playwright report with:

```bash
npx playwright show-report
```

---

# 5. Bug Reporting

During manual testing, several issues were identified.

Examples include:

* Google Sign-In not working as expected
* Invalid postal codes being accepted
* Invalid country values being accepted
* Excessively long phone numbers being accepted
* Shopping cart controls not functioning correctly
* Add-to-cart displaying an error while still adding the product
* Incorrec
