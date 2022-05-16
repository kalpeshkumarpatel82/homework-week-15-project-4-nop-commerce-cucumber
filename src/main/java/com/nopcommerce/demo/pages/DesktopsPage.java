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

public class DesktopsPage extends Utility {
    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
    WebElement pageHeader;

    @CacheLookup
    @FindBy(xpath = "//select[@id='products-orderby']")
    WebElement productOrderBy;

    @CacheLookup
    @FindBy(xpath = "//select[@id='products-pagesize']")
    WebElement productDisplayBy;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement listView;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement buildYourComputer;

    public String getPageHeader() {
        log.info("Getting Page Header : " + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public void setProductOrderBy(String text) {
        selectByVisibleTextFromDropDown(productOrderBy, text);
        log.info("Clicking on Product Order by : " + text + "to " + productOrderBy.toString());
    }

    public void setProductDisplayBy(String text) {
        selectByVisibleTextFromDropDown(productDisplayBy, text);
        log.info("Clicking on Product Display by : " + text + "to " + productDisplayBy.toString());
    }

    public void setListView(String text) {
        clickOnElement(listView);
        log.info("Clicking on List View : " + listView.toString());
    }

    public void setBuildYourComputer() {
        clickOnElement(buildYourComputer);
        log.info("Clicking on Build Your Computer : " + buildYourComputer.toString());
    }

}
