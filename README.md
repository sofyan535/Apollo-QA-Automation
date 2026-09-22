# Apollo QA Automation

## Project Overview

This project contains automated end-to-end tests developed with Playwright for the Practice Software Testing web application.

The automation was developed as part of the Apollo Green Solutions QA Automation Internship Technical Assessment.

## Technologies

- JavaScript
- Node.js
- Playwright
- Git
- GitHub

## Automated Tests

The project contains three main automated test files:

### 1. Login Tests

File:

`tests/login.spec.js`

The tests cover:

- Login with valid credentials
- Login with an incorrect password
- Verification of successful login
- Verification of login error handling

### 2. Shopping Cart Tests

File:

`tests/cart.spec.js`

The tests cover:

- Adding a product to the shopping cart
- Verification of the cart counter
- Increasing product quantity
- Removing a product from the cart

### 3. End-to-End Shopping Flow

File:

`tests/shopping-flow.spec.js`

This test covers a complete user flow:

1. Open the application
2. Sort products
3. Log in
4. Select a product
5. Add the product to the cart
6. Open the cart
7. Proceed to checkout
8. Attempt to complete the payment

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Apollo-QA-Automation.git