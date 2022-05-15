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

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]")
    WebElement computerLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Electronics')]")
    WebElement electronicsLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Apparel')]")
    WebElement apparelLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Digital downloads')]")
    WebElement ddLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]")
    WebElement booksLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Jewelry')]")
    WebElement jewerlyrLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Gift Cards')]")
    WebElement gcLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement loginLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[1]/div[2]/div[1]/a[1]/img[1]")
    WebElement logo;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]")
    WebElement myAccount;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOutLink;


    public void setComputerLink() {
        clickOnElement(computerLink);
        log.info("Clicking on Computer Link : " + computerLink.toString());
    }

    public void setElectronicsLink() {
        clickOnElement(electronicsLink);
        log.info("Clicking on Electronics Link : " + electronicsLink.toString());
    }

    public void setApparelLink() {
        clickOnElement(apparelLink);
        log.info("Clicking on Appareal Link : " + apparelLink.toString());
    }

    public void setDdLink() {
        clickOnElement(ddLink);
        log.info("Clicking on Digital Download Link : " + ddLink.toString());
    }

    public void setBooksLink() {
        clickOnElement(booksLink);
        log.info("Clicking on Books Link : " + booksLink.toString());
    }

    public void setJewerlyrLink() {
        clickOnElement(jewerlyrLink);
        log.info("Clicking on Jewerly Link : " + jewerlyrLink.toString());
    }

    public void setGCLink() {
        clickOnElement(gcLink);
        log.info("Clicking on Gift Card Link : " + gcLink.toString());
    }

    public void setLoginLink() {
        clickOnElement(loginLink);
        log.info("Clicking on login Link : " + loginLink.toString());
    }

    public void setRegisterLink() {
        clickOnElement(registerLink);
        log.info("Clicking on Register Link : " + registerLink.toString());
    }

    public void setLogo() {
        clickOnElement(logo);
        log.info("Clicking on Logo Link : " + logo.toString());
    }

    public void setMyAccount() {
        clickOnElement(myAccount);
        log.info("Clicking on MyAccount Link : " + myAccount.toString());
    }

    public void setLogOutLink() {
        clickOnElement(logOutLink);
        log.info("Clicking on logout Link : " + logOutLink.toString());
    }


}
