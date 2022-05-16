package com.nopcommerce.demo.pages;
/* 
 Created by Kalpesh Patel
 */

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement pageHeader;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement genderMaleRadio;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement genderFemaleRadio;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//div[@class='date-picker-wrapper']/select[1]")
    WebElement birthDay;

    @CacheLookup
    @FindBy(xpath = "//div[@class='date-picker-wrapper']/select[2]")
    WebElement birthMonth;

    @CacheLookup
    @FindBy(xpath = "//div[@class='date-picker-wrapper']/select[3]")
    WebElement birthYear;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailAddress;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement repeatPassword;

    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationVerification;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueButton;

    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement repeatPasswordError;

    public String getPageHeader() {
        log.info("Getting Page Header : " + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public void setGenderMaleRadio() {
        clickOnElement(genderMaleRadio);
        log.info("Clicking on Male Gender Radio : " + genderMaleRadio.toString());
    }

    public void setGenderFemaleRadio() {
        clickOnElement(genderFemaleRadio);
        log.info("Clicking on Female Gender Radio  : " + genderFemaleRadio.toString());
    }

    public void setFirstName(String text) {
        sendTextToElement(firstName, text);
        log.info("Sending FirstName  : " + text + " to " + firstName.toString());
    }

    public void setLastName(String text) {
        sendTextToElement(lastName, text);
        log.info("Sending text to FirstName : " + text + " to " + lastName.toString());
    }

    public void setBirthDate(String day, String month, String year) {
        selectByVisibleTextFromDropDown(birthDay, day);
        selectByVisibleTextFromDropDown(birthMonth, month);
        selectByVisibleTextFromDropDown(birthYear, year);
        log.info("Selecting BirthDate : " + day + "/" + month + "/" + year + " to " + birthDay.toString() + " " + birthMonth.toString() + " " + birthYear.toString());
    }

    public void setEmailAddress(String text) {
        int random = (int) (Math.random() * 10000);
        sendTextToElement(emailAddress, text + random + "@domain.co.uk");
        log.info("Sending email " + text + " to " + emailAddress.toString());
    }

    public void setPassword(String text) {
        sendTextToElement(password, text);
        log.info("Sending Password " + text + " to " + password.toString());
    }

    public void setRepeatPassword(String text) {
        sendTextToElement(repeatPassword, text);
        log.info("Sending Confirm Password " + text + " to " + repeatPassword.toString());
    }

    public void setRegisterButton() {
        clickOnElement(registerButton);
        log.info("Clicking on Register : " + registerButton.toString());
    }

    public String getRegistrationVerification() {
        log.info("Getting Registration confirm : " + registrationVerification.toString());
        return getTextFromElement(registrationVerification);
    }

    public void setContinueButton() {
        clickOnElement(continueButton);
        log.info("Clicking on continue : " + continueButton.toString());
    }

    public String getFirstNameErrorMessage() {
        log.info("Getting FirstName Error : " + firstNameError.toString());
        return getTextFromElement(firstNameError);
    }

    public String getLastNameErrorMessage() {
        log.info("Getting LastName Error : " + lastNameError.toString());
        return getTextFromElement(lastNameError);
    }

    public String getEmailErrorMessage() {
        log.info("Getting Email Error : " + emailError.toString());
        return getTextFromElement(emailError);
    }

    public String getPasswordErrorMessage() {
        log.info("Getting Password Error : " + passwordError.toString());
        return getTextFromElement(passwordError);
    }

    public String getRepeatPasswordErrorMessage() {
        log.info("Getting Repeat Password Error : " + repeatPasswordError.toString());
        return getTextFromElement(repeatPasswordError);
    }

}
