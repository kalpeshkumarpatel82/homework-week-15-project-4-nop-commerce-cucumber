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

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement pageHeader;

    @CacheLookup
    @FindBy(xpath = "//div[@class='sub-category-item']//a[contains(text(),'Desktops')]")
    WebElement desktopLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='sub-category-item']//a[contains(text(),'Notebooks')]")
    WebElement noteBooksLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='sub-category-item']//a[contains(text(),'Software')]")
    WebElement softwareLink;

    public String getPageHeader() {
        log.info("Getting Page Header " + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public void setDesktopLink() {
        clickOnElement(desktopLink);
        log.info("Clicking on Desktop Link " + desktopLink.toString());
    }

    public void setNotebooksLink() {
        log.info("Clicking on NoteBooks Link " + noteBooksLink.toString());
        clickOnElement(noteBooksLink);
    }

    public void setSoftwareLink() {
        log.info("Clicking on Software Link " + softwareLink.toString());
        clickOnElement(softwareLink);
    }


}
