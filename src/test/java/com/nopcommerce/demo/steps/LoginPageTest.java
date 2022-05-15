package com.nopcommerce.demo.steps;/*
 Created by Kalpesh Patel
 */

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().setLoginLink();
    }

    @And("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
    }

    @Then("^I should see the \"([^\"]*)\" message$")
    public void iShouldSeeTheMessage(String message) {
        Assert.assertEquals("Failed to navigate to registration page", message, new LoginPage().getPageHeader());
    }

    @And("^I enter the email address \"([^\"]*)\"$")
    public void iEnterTheEmailAddress(String email) {
        new LoginPage().setEmailField(email);
    }

    @And("^I enter the password \"([^\"]*)\"$")
    public void iEnterThePassword(String password) {
        new LoginPage().setPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().setLoginButton();
    }

    @Then("^I should see the error message$")
    public void iShouldSeeTheErrorMessage() {
        String expectedMessage = "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found";
        Assert.assertEquals("Failed to verify Invalid login", expectedMessage, new LoginPage().getErrorMessage());
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertEquals("Failed to login", "Log out", new LoginPage().getLogOutButtonText());
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new LoginPage().setLogOutButton();
    }

    @Then("^I should see the login link$")
    public void iShouldSeeTheLoginLink() {
        Assert.assertEquals("Failed to Logout", "Log in", new LoginPage().getLoginButtonText());
    }


}
