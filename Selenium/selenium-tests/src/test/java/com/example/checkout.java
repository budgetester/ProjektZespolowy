package com.example;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.time.Duration;

import static org.testng.Assert.assertTrue;

public class checkout {
    private WebDriver driver;
    private WebDriverWait wait;
    private JavascriptExecutor js;

    @BeforeClass
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));  // Increased wait time
        js = (JavascriptExecutor) driver;
        driver.get("https://www.castorama.pl/nawoz-przeciwko-brazowieniu-igiel-agrecol-5-kg/5902341002482_CAPL.prd");
        wait.until(ExpectedConditions.elementToBeClickable(By.id("truste-consent-button"))).click();
    }

    @Test
    public void testCheckoutProcess() {
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='product-qty-plus']"))).click();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-test-id='field-input'] input"))).sendKeys("92-542");

        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='check-post-code-btn']"))).click();
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='add-to-basket-button']"))).click();
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='go-to-basket']"))).click();
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='basket-checkout-button']"))).click();

        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='fulfilment-delivery-tile_radio']"))).click();
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-optimizely-id='optimizelyTestId-fulfilment-continue-button']"))).click();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-test-id='field-input'] input"))).sendKeys("jakub.test@wp.pl");

        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-optimizely-id='optimizelyTestId-checkoutAsGuestButton']"))).click();

        WebElement firstNameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("firstName")));
        bringElementIntoView(firstNameField);
        firstNameField.sendKeys("Jakub");

        WebElement lastNameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("lastName")));
        bringElementIntoView(lastNameField);
        lastNameField.sendKeys("Nazwisko");

        WebElement mobileNumberField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("mobileNumber")));
        bringElementIntoView(mobileNumberField);
        mobileNumberField.sendKeys("536709388");

        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='manual-address-entry-button']"))).click();

        WebElement addressLine1Field = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("addressLine1")));
        bringElementIntoView(addressLine1Field);
        addressLine1Field.sendKeys("ulica");

        WebElement houseNumberField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("houseNumber")));
        bringElementIntoView(houseNumberField);
        houseNumberField.sendKeys("1");

        WebElement cityField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("city")));
        bringElementIntoView(cityField);
        cityField.sendKeys("Miejscowosc");

        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-test-id='add-address-button']"))).click();
    }

    private void bringElementIntoView(WebElement element) {
        js.executeScript("arguments[0].scrollIntoView(true);", element);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
