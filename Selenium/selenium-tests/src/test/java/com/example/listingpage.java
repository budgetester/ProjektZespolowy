package com.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;

import static org.testng.Assert.assertTrue;

public class listingpage {
    private WebDriver driver;

    @BeforeClass
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.castorama.pl/ogrod-i-otoczenie/meble-ogrodowe/zestawy-meblowe.cat");
        driver.findElement(By.id("truste-consent-button")).click();
    }

    @Test
    public void testProductListIsVisible() {
        WebElement productList = driver.findElement(By.id("product-lister"));
        assertTrue(productList.isDisplayed());
    }

    @Test
    public void testProductPriceIsVisible() {
        WebElement productPrice = driver.findElement(By.cssSelector("[data-test-id='productPrice']"));
        assertTrue(productPrice.isDisplayed());
    }

    @Test
    public void testAddToBasketButtonIsVisible() {
        WebElement addToBasketButton = driver.findElement(By.cssSelector("[data-test-id='add-to-basket-button-plp']"));
        assertTrue(addToBasketButton.isDisplayed());
    }

    @Test
    public void testFooterIsVisible() {
        WebElement footer = driver.findElement(By.cssSelector("[data-test-id='footer-section']"));
        assertTrue(footer.isDisplayed());
    }

    @Test
    public void testRecommendedProductsSectionIsVisible() {
        WebElement recommendedProductsSection = driver.findElement(By.cssSelector("[data-test-id='grid-sections']"));
        assertTrue(recommendedProductsSection.isDisplayed());
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
