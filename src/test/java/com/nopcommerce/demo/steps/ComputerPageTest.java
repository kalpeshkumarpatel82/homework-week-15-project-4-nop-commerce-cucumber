package com.nopcommerce.demo.steps;
/* 
 Created by Kalpesh Patel
 */

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerPageTest {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().setComputerLink();
    }

    @Then("^I see the \"([^\"]*)\" text in Page header of Computer page$")
    public void iSeeTheTextInPageHeaderOfComputerPage(String message) {
        Assert.assertEquals("Failed to navigate to Computer page", message, new ComputerPage().getPageHeader());
    }

    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().setDesktopLink();
    }

    @Then("^I see the \"([^\"]*)\" text in Page header of desktop page$")
    public void iSeeTheTextInPageHeaderOfDesktopPage(String message) {
        Assert.assertEquals("Failed to navigate to desktop page", message, new DesktopsPage().getPageHeader());
    }

    @And("^I click on Build your own computer$")
    public void iClickOnBuildYourOwnComputer() {
        new DesktopsPage().setBuildYourComputer();

    }

    @And("^I select \"([^\"]*)\" from processor$")
    public void iSelectFromProcessor(String processor) {
        new BuildYourOwnComputerPage().setSelectProcessor(processor);
    }

    @And("^I select \"([^\"]*)\" from RAM$")
    public void iSelectFromRAM(String ram) {
        new BuildYourOwnComputerPage().setSelectRam(ram);
    }

    @And("^I select \"([^\"]*)\" from HDD$")
    public void iSelectFromHDD(String hdd) {
        new BuildYourOwnComputerPage().setSelectHDD(hdd);
    }

    @And("^I select \"([^\"]*)\" from OS$")
    public void iSelectFromOS(String os) {
        new BuildYourOwnComputerPage().setSelectOS(os);
    }

    @And("^I select \"([^\"]*)\" from Software$")
    public void iSelectFromSoftware(String software) {
        new BuildYourOwnComputerPage().setSoftware(software);
    }

    @And("^I click on ADD to Cart button$")
    public void iClickOnADDToCartButton() {
        new BuildYourOwnComputerPage().setClickOnAddToCartButton();
    }

    @Then("^I see the message \"([^\"]*)\"$")
    public void iSeeTheMessage(String arg0) {
        Assert.assertEquals("Failed to add product", "The product has been added to your shopping cart", new BuildYourOwnComputerPage().getInfoFromGreenBar());
    }
}
