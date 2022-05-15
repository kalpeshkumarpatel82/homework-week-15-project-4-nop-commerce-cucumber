package com.nopcommerce.demo.steps;
/* 
 Created by Kalpesh Patel
 */

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterPageTest {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().setRegisterLink();
    }

    @Then("^I should see the register link$")
    public void iShouldSeeTheRegisterLink() {
        Assert.assertEquals("Failed to navigate to Register Page!!", new RegisterPage().getPageHeader(), "Register");
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().setRegisterButton();
    }

    @Then("^I should see the error message \"([^\"]*)\" for first name field$")
    public void iShouldSeeTheErrorMessageForFirstNameField(String errMsg) {
        Assert.assertEquals("Failed to check mandatory field", new RegisterPage().getFirstNameErrorMessage(), errMsg);
    }

    @And("^I should see the error message \"([^\"]*)\" for last name field$")
    public void iShouldSeeTheErrorMessageForLastNameField(String errMsg) {
        Assert.assertEquals("Failed to check mandatory field", new RegisterPage().getLastNameErrorMessage(), errMsg);
    }

    @And("^I should see the error message \"([^\"]*)\" for email field$")
    public void iShouldSeeTheErrorMessageForEmailField(String errMsg) {
        Assert.assertEquals("Failed to check mandatory field", new RegisterPage().getEmailErrorMessage(), errMsg);
    }


    @And("^I should see the error message \"([^\"]*)\" for password field$")
    public void iShouldSeeTheErrorMessageForPasswordField(String errMsg) {
        Assert.assertEquals("Failed to check mandatory field", new RegisterPage().getPasswordErrorMessage(), errMsg);
    }

    @And("^I should see the error message \"([^\"]*)\" for Confirm password field$")
    public void iShouldSeeTheErrorMessageForConfirmPasswordField(String errMsg) {
        Assert.assertEquals("Failed to check mandatory field", new RegisterPage().getRepeatPasswordErrorMessage(), errMsg);
    }

    @And("^I select Gender \"([^\"]*)\"$")
    public void iSelectGender(String gender) {
        if (gender.equalsIgnoreCase("Female")) new RegisterPage().setGenderFemaleRadio();
        if (gender.equalsIgnoreCase("Male")) new RegisterPage().setGenderMaleRadio();
    }

    @And("^I enter \"([^\"]*)\" in Firstname field$")
    public void iEnterInFirstnameField(String firstname) {
        new RegisterPage().setFirstName(firstname);
    }

    @And("^I enter \"([^\"]*)\" in Lastname field$")
    public void iEnterInLastnameField(String lastname) {
        new RegisterPage().setLastName(lastname);
    }

    @And("^I select \"([^\"]*)\" Birth day, \"([^\"]*)\" Birth Month and \"([^\"]*)\" Birth Year$")
    public void iSelectBirthDayBirthMonthAndBirthYear(String day, String month, String year) {
        new RegisterPage().setBirthDate(day, month, year);
    }

    @And("^I enter \"([^\"]*)\" in Password field$")
    public void iEnterInPasswordField(String password) {
        new RegisterPage().setPassword(password);
    }

    @And("^I enter \"([^\"]*)\" in confirm Password field$")
    public void iEnterInConfirmPasswordField(String password) {
        new RegisterPage().setRepeatPassword(password);
    }

    @Then("^I see the confirm message \"([^\"]*)\"$")
    public void iSeeTheConfirmMessage(String message) {
        Assert.assertEquals("", new RegisterPage().getRegistrationVerification(), message);
    }

    @And("^I enter \"([^\"]*)\" in Email field$")
    public void iEnterInEmailField(String email) {
        new RegisterPage().setEmailAddress(email);
    }
}
