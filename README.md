# WebdriverIO + Cucumber + Allure (TypeScript)

This repository demonstrates a robust E2E testing framework using **WebdriverIO** with **Cucumber (BDD)** and **Allure Reports**, fully implemented in **TypeScript**.

## Project Advantages

- **Standardized BDD**: Using Gherkin for clear, human-readable test scenarios.
- **Native WebdriverIO integration**: Leveraging the powerful WDIO test runner and its vast ecosystem of plugins.
- **Advanced Reporting**: Comprehensive Allure reports with step-by-step execution and screenshots on failure.
- **Type Safety**: Built with TypeScript to ensure maintainable and error-free code.

## How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Execute tests**:
   ```bash
   npm run test
   ```

3. **Generate Allure report**:
   ```bash
   npm run report
   ```

## Scenario: Unusual Traffic Detection
This project includes a negative test case that validates Google's "Unusual Traffic" detection screen, demonstrating the framework's ability to handle anti-bot screens and validate negative outcomes.
