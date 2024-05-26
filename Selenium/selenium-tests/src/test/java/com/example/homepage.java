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

public class homepage {
    private WebDriver driver;

    @BeforeClass
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.castorama.pl");
        driver.findElement(By.id("truste-consent-button")).click();
    }

    @Test
    public void testMainBannerIsVisible() {
        WebElement mainBanner = driver.findElement(By.cssSelector("[data-test-id='PageContent']"));
        assertTrue(mainBanner.isDisplayed());
    }

    @Test
    public void testPopularCategoriesSectionIsVisible() {
        WebElement popularCategories = driver.findElement(By.cssSelector("[data-test-id='grid-sections']"));
        assertTrue(popularCategories.isDisplayed());
    }

    @Test
    public void testPromotionsSectionIsVisible() {
        WebElement promotionsSection = driver.findElement(By.cssSelector("[data-test-id='editorial-tile']"));
        assertTrue(promotionsSection.isDisplayed());
    }

    @Test
    public void testFooterIsVisible() {
        WebElement footer = driver.findElement(By.cssSelector("[data-test-id='footer-section']"));
        assertTrue(footer.isDisplayed());
    }

    @Test
    public void testLoginAndRegisterButtonsAreVisible() {
        WebElement loginButton = driver.findElement(By.cssSelector("[data-test-id='desktop-header-login']"));
        assertTrue(loginButton.isDisplayed());
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}