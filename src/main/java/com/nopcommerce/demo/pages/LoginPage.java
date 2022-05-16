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

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//li/a[contains(text(),'Log in')]")
    WebElement loginButtonTopMenu;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement pageHeader;

    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOutButton;

    public void setEmailField(String text) {
        sendTextToElement(emailField, text);
        log.info("Sending text to email : " + emailField.toString());
    }

    public void setPassword(String text) {
        sendTextToElement(password, text);
        log.info("Sending text to password : " + password.toString());
    }

    public void setLoginButton() {
        clickOnElement(loginButton);
        log.info("clicking on login button : " + loginButton.toString());
    }

    public String getLoginButtonText() {
        log.info("Getting on login button text : " + loginButtonTopMenu.toString());
        return getTextFromElement(loginButtonTopMenu);
    }

    public String getPageHeader() {
        log.info("Getting page header : " + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public String getErrorMessage() {
        log.info("Getting Error Message : " + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }

    public String getLogOutButtonText() {
        log.info("Getting LogOut Button Text : " + logOutButton.toString());
        return getTextFromElement(logOutButton);
    }

    public void setLogOutButton() {
        clickOnElement(logOutButton);
        log.info("Clicking on LogOut Button : " + logOutButton.toString());
    }
}
