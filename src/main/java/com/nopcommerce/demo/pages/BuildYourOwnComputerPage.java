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

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')")
    WebElement pageHeader;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement selectProcessor;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement selectRam;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement select320GBHDD;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement select400GBHDD;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_8']")
    WebElement selectVistaPremium;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement selectVistaHome;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement selectMSOffice;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_11']")
    WebElement selectAdobe;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement selectTotalCommander;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement clickOnAddToCartButton;

    @CacheLookup
    @FindBy(xpath = "//div/p[@class='content']")
    WebElement infoFromGreenBar;

    public String getPageHeader() {
        log.info("Getting Page Header " + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public void setSelectProcessor(String text) {
        selectByVisibleTextFromDropDown(selectProcessor, text);
        log.info("Setting Processor " + selectProcessor.toString());
    }

    public void setSelectRam(String text) {
        selectByVisibleTextFromDropDown(selectRam, text);
        log.info("Setting RAM " + selectRam.toString());
    }

    public void setSelectHDD(String text) {
        if (text.contains("320 GB")) {
            clickOnElement(select320GBHDD);
            log.info("Setting HDD : " + text + "to " + select320GBHDD.toString());
        } else if (text.contains("400 GB [+$100.00]")) {
            clickOnElement(select400GBHDD);
            log.info("Setting HDD : " + text + "to " + select400GBHDD.toString());
        }
    }

    public void setSoftware(String text) {
        if (text == "Microsoft Office [+$50.00]") {
            clickOnElement(selectMSOffice);
            log.info("Setting software : " + text + "to " + selectMSOffice.toString());
        }
        if (text == "Acrobat Reader [+$10.00]") {
            clickOnElement(selectAdobe);
            log.info("Setting software : " + text + "to " + selectAdobe.toString());
        }
        if (text == "Total Commander [+$5.00]") {
            clickOnElement(selectTotalCommander);
            log.info("Setting software : " + text + "to " + selectTotalCommander.toString());
        }

    }


    public void setSelectOS(String text) {
        if (text == "Vista Home [+$50.00]") {
            clickOnElement(selectVistaHome);
            log.info("Setting OS : " + text + "to " + selectVistaHome.toString());
        }
        if (text == "Vista Premium [+$60.00]") {
            clickOnElement(selectVistaPremium);
            log.info("Setting HDD : " + text + "to " + selectVistaPremium.toString());
        }
    }

    public void setClickOnAddToCartButton() {
        clickOnElement(clickOnAddToCartButton);
        log.info("Clicking on Add to cart : " + clickOnAddToCartButton.toString());
    }

    public String getInfoFromGreenBar() {
        log.info("Getting Confirm Message After adding to cart : " + infoFromGreenBar.toString());
        return getTextFromElement(infoFromGreenBar);
    }

}
