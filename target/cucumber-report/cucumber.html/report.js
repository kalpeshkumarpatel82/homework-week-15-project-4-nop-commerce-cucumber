$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerTest.feature");
formatter.feature({
  "line": 1,
  "name": "Computer page test",
  "description": "",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6225172200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Verifying the functionality of the computer page"
    }
  ],
  "line": 5,
  "name": "Verify User should navigate to Computer page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see the \"Computers\" text in Page header of Computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 110655100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 592618700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 11
    }
  ],
  "location": "ComputerPageTest.iSeeTheTextInPageHeaderOfComputerPage(String)"
});
formatter.result({
  "duration": 31499900,
  "status": "passed"
});
formatter.after({
  "duration": 627154300,
  "status": "passed"
});
formatter.before({
  "duration": 1854822700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify User should navigate to Desktops page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I see the \"Desktops\" text in Page header of desktop page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 444238400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 569542900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 11
    }
  ],
  "location": "ComputerPageTest.iSeeTheTextInPageHeaderOfDesktopPage(String)"
});
formatter.result({
  "duration": 26560700,
  "status": "passed"
});
formatter.after({
  "duration": 594589500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify that User should Build Your Own Computer and add them to Cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"\u003cprocessor\u003e\" from processor",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"\u003cram\u003e\" from RAM",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"\u003chdd\u003e\" from HDD",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"\u003cos\u003e\" from OS",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"\u003csoftware\u003e\" from Software",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on ADD to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 29,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 30,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 31,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista  Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 32,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2528705300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify that User should Build Your Own Computer and add them to Cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"2.2 GHz Intel Pentium Dual-Core E2200\" from processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2 GB\" from RAM",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" from HDD",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Vista Home [+$50.00]\" from OS",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Microsoft Office [+$50.00]\" from Software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on ADD to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 481624700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 407123700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1648508100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromProcessor(String)"
});
formatter.result({
  "duration": 79232700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromRAM(String)"
});
formatter.result({
  "duration": 65399100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromHDD(String)"
});
formatter.result({
  "duration": 54021800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromOS(String)"
});
formatter.result({
  "duration": 1579500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromSoftware(String)"
});
formatter.result({
  "duration": 3734100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDToCartButton()"
});
formatter.result({
  "duration": 48824500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSeeTheMessage(String)"
});
formatter.result({
  "duration": 888913000,
  "status": "passed"
});
formatter.after({
  "duration": 589326100,
  "status": "passed"
});
formatter.before({
  "duration": 1762244000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify that User should Build Your Own Computer and add them to Cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"4GB [+$20.00]\" from RAM",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"400 GB [+$100.00]\" from HDD",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Vista Premium [+$60.00]\" from OS",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Acrobat Reader [+$10.00]\" from Software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on ADD to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 751742300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 748008300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 797231800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromProcessor(String)"
});
formatter.result({
  "duration": 58549000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromRAM(String)"
});
formatter.result({
  "duration": 83670900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromHDD(String)"
});
formatter.result({
  "duration": 49818500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromOS(String)"
});
formatter.result({
  "duration": 1108600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromSoftware(String)"
});
formatter.result({
  "duration": 1030900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDToCartButton()"
});
formatter.result({
  "duration": 45048100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSeeTheMessage(String)"
});
formatter.result({
  "duration": 885521300,
  "status": "passed"
});
formatter.after({
  "duration": 601239800,
  "status": "passed"
});
formatter.before({
  "duration": 5267250900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify that User should Build Your Own Computer and add them to Cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"8GB [+$60.00]\" from RAM",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" from HDD",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Vista  Home [+$50.00]\" from OS",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Total Commander [+$5.00]\" from Software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on ADD to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 842726000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 1148224600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1282223100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromProcessor(String)"
});
formatter.result({
  "duration": 38478600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromRAM(String)"
});
formatter.result({
  "duration": 60852500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromHDD(String)"
});
formatter.result({
  "duration": 49934100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista  Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromOS(String)"
});
formatter.result({
  "duration": 1113400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectFromSoftware(String)"
});
formatter.result({
  "duration": 1261300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDToCartButton()"
});
formatter.result({
  "duration": 39928900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSeeTheMessage(String)"
});
formatter.result({
  "duration": 267913000,
  "status": "passed"
});
formatter.after({
  "duration": 602536300,
  "status": "passed"
});
formatter.uri("loginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login test of demo.nopcommerce.com",
  "description": "",
  "id": "login-test-of-demo.nopcommerce.com",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2135316900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Verifying various login functionality scenarios (Valid and Invalid)"
    }
  ],
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test-of-demo.nopcommerce.com;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"Welcome, Please Sign In!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 982209600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 28300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 27882200,
  "status": "passed"
});
formatter.after({
  "duration": 609992600,
  "status": "passed"
});
formatter.before({
  "duration": 1920691200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test-of-demo.nopcommerce.com;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the email address \"kps@yahoo.be\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"Password111\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 413075300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kps@yahoo.be",
      "offset": 27
    }
  ],
  "location": "LoginPageTest.iEnterTheEmailAddress(String)"
});
formatter.result({
  "duration": 64376400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password111",
      "offset": 22
    }
  ],
  "location": "LoginPageTest.iEnterThePassword(String)"
});
formatter.result({
  "duration": 60089900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 370221100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 23679900,
  "status": "passed"
});
formatter.after({
  "duration": 606415100,
  "status": "passed"
});
formatter.before({
  "duration": 2431749000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test-of-demo.nopcommerce.com;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter the email address \"orange@nodomain.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter the password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 389788300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange@nodomain.com",
      "offset": 27
    }
  ],
  "location": "LoginPageTest.iEnterTheEmailAddress(String)"
});
formatter.result({
  "duration": 69540000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 22
    }
  ],
  "location": "LoginPageTest.iEnterThePassword(String)"
});
formatter.result({
  "duration": 62189100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 751662000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 24512600,
  "status": "passed"
});
formatter.after({
  "duration": 597246400,
  "status": "passed"
});
formatter.before({
  "duration": 1989292900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-test-of-demo.nopcommerce.com;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter the email address \"orange@nodomain.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter the password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the login link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 538227600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange@nodomain.com",
      "offset": 27
    }
  ],
  "location": "LoginPageTest.iEnterTheEmailAddress(String)"
});
formatter.result({
  "duration": 67654500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 22
    }
  ],
  "location": "LoginPageTest.iEnterThePassword(String)"
});
formatter.result({
  "duration": 61863000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 741029300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 587058900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeTheLoginLink()"
});
formatter.result({
  "duration": 24388000,
  "status": "passed"
});
formatter.after({
  "duration": 596367500,
  "status": "passed"
});
formatter.uri("registerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register functionality of demo.nopcommerce.com",
  "description": "",
  "id": "register-functionality-of-demo.nopcommerce.com",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2334615400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Verifying various Register functionality scenario"
    }
  ],
  "line": 5,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register-functionality-of-demo.nopcommerce.com;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the register link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 424792300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iShouldSeeTheRegisterLink()"
});
formatter.result({
  "duration": 24762400,
  "status": "passed"
});
formatter.after({
  "duration": 599056500,
  "status": "passed"
});
formatter.before({
  "duration": 1705339200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify that firstname, lastname, email, password and confirm password fields are mandatory",
  "description": "",
  "id": "register-functionality-of-demo.nopcommerce.com;verify-that-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the error message \"First name is required.\" for first name field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Last name is required.\" for last name field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Email is required.\" for email field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Password is required.\" for password field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Password is required.\" for Confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 899276900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 59929400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageForFirstNameField(String)"
});
formatter.result({
  "duration": 44710800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageForLastNameField(String)"
});
formatter.result({
  "duration": 21772700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageForEmailField(String)"
});
formatter.result({
  "duration": 20605000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageForPasswordField(String)"
});
formatter.result({
  "duration": 22372600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageForConfirmPasswordField(String)"
});
formatter.result({
  "duration": 25439400,
  "status": "passed"
});
formatter.after({
  "duration": 596998700,
  "status": "passed"
});
formatter.before({
  "duration": 1929275100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that User should create Account Successfully",
  "description": "",
  "id": "register-functionality-of-demo.nopcommerce.com;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select Gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter \"Baba\" in Firstname field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"Ramdev\" in Lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \"babaramdev\" in Email field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"20\" Birth day, \"June\" Birth Month and \"1975\" Birth Year",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \"Password123\" in Password field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter \"Password123\" in confirm Password field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I see the confirm message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 415773800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterPageTest.iSelectGender(String)"
});
formatter.result({
  "duration": 46408400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Baba",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterInFirstnameField(String)"
});
formatter.result({
  "duration": 65339000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramdev",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterInLastnameField(String)"
});
formatter.result({
  "duration": 60102400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "babaramdev",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterInEmailField(String)"
});
formatter.result({
  "duration": 78370600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    },
    {
      "val": "June",
      "offset": 26
    },
    {
      "val": "1975",
      "offset": 49
    }
  ],
  "location": "RegisterPageTest.iSelectBirthDayBirthMonthAndBirthYear(String,String,String)"
});
formatter.result({
  "duration": 162857000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 58442800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterInConfirmPasswordField(String)"
});
formatter.result({
  "duration": 61494900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1085052400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 27
    }
  ],
  "location": "RegisterPageTest.iSeeTheConfirmMessage(String)"
});
formatter.result({
  "duration": 23150100,
  "status": "passed"
});
formatter.after({
  "duration": 602816700,
  "status": "passed"
});
});