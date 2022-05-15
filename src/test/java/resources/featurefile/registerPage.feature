Feature: Register functionality of demo.nopcommerce.com

  # Verifying various Register functionality scenario

  Scenario: Verify user should navigate to register page successfully
    Given I am on homepage
    When I click on register link
    Then I should see the register link

  Scenario: Verify that firstname, lastname, email, password and confirm password fields are mandatory
    Given I am on homepage
    When I click on register link
    And I click on register button
    Then I should see the error message "First name is required." for first name field
    And I should see the error message "Last name is required." for last name field
    And I should see the error message "Email is required." for email field
    And I should see the error message "Password is required." for password field
    And I should see the error message "Password is required." for Confirm password field

    Scenario: Verify that User should create Account Successfully
      Given I am on homepage
      When I click on register link
      And I select Gender "Female"
      And I enter "Baba" in Firstname field
      And I enter "Ramdev" in Lastname field
      And I enter "babaramdev" in Email field
      And I select "20" Birth day, "June" Birth Month and "1975" Birth Year
      And I enter "Password123" in Password field
      And I enter "Password123" in confirm Password field
      And I click on register button
      Then I see the confirm message "Your registration completed"