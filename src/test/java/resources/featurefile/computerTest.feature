@regression
Feature: Computer page test

  # Verifying the functionality of the computer page

  Scenario: Verify User should navigate to Computer page successfully
    Given I am on homepage
    When I click on computer tab
    Then I see the "Computers" text in Page header of Computer page

  Scenario: Verify User should navigate to Desktops page successfully
    Given I am on homepage
    When I click on computer tab
    And I click on desktop link
    Then I see the "Desktops" text in Page header of desktop page

  Scenario Outline:  Verify that User should Build Your Own Computer and add them to Cart successfully
    Given I am on homepage
    When I click on computer tab
    And I click on desktop link
    And I click on Build your own computer
    And I select "<processor>" from processor
    And I select "<ram>" from RAM
    And I select "<hdd>" from HDD
    And I select "<os>" from OS
    And I select "<software>" from Software
    And I click on ADD to Cart button
    Then I see the message "The product has been added to your shopping cart"
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista  Home [+$50.00]   | Total Commander [+$5.00]   |