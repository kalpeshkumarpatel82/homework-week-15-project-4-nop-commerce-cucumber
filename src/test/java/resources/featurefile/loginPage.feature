@regression
Feature: Login test of demo.nopcommerce.com

# Verifying various login functionality scenarios (Valid and Invalid)

  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    And I should navigate to login page successfully
    Then I should see the "Welcome, Please Sign In!" message

  Scenario: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter the email address "kps@yahoo.be"
    And I enter the password "Password111"
    And I click on login button
    Then I should see the error message

  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter the email address "orange@nodomain.com"
    And I enter the password "Password123"
    And I click on login button
    Then I should login successfully

  Scenario: User should logout successfully
    Given I am on homepage
    When I click on login link
    And I enter the email address "orange@nodomain.com"
    And I enter the password "Password123"
    And I click on login button
    And I click on logout button
    Then I should see the login link