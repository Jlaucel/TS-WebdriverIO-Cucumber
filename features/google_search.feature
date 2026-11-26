Feature: Google Search

  @QA-WDI-001 @risk-low @external
  Scenario: Unusual traffic detection by Google (Negative Scenario)
    Given I open the Google page
    When I search for "WebdriverIO Cucumber Allure"
    Then I should see the unusual traffic verification screen
