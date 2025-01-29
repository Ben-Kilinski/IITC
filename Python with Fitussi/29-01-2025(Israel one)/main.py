from selenium import webdriver
from selenium.webdriver.common.by import By #localiza os elementos na pagina (por ID, por exemplo)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()

def test_product():
    try:
        # TASK 1
        driver.get("https://atid.store/")
        if "atid" in driver.current_url: 
            print("✅Task1: the url contains 'atid' word!")
        else:
            print("❌Task 1 failed")

        # TASK 2
        driver.find_element(By.CSS_SELECTOR, "li[id='menu-item-381'] a[class='menu-link']").click()
        time.sleep(2)
        if driver.current_url == "https://atid.store/":
            print("✅Task 2: click in Home redirects to home page!")
        else:
            print("❌Task 2 failed")

        # TASK 3
        if driver.find_element(By.XPATH, "(//a[@role='button'])[11]"):
            print("✅Task 3: Shop Now button exists in Home Page!")
        else: 
            print("❌Task 3 failed")    

        # TASK 4
        nav_bar = driver.find_element(By.XPATH, "(//div[@class='site-header-primary-section-center site-header-section ast-flex ast-grid-section-center'])[1]")
        nav_elements = nav_bar.find_elements(By.XPATH, "./*")
        set_nav = set()
        for i in range(len(nav_elements)):
            set_nav.add(nav_elements[i].text)
        for j in set_nav:
             

        nav_items = {"HOME", "STORE", "MEN", "WOMEN", "ACCESSORIES", "ABOUT", "CONTACT US"}
















        # driver.find_element(By.ID, "menu-item-45").click() # clicar no botao store
        # driver.find_element(By.ID, "wc-block-search__input-1").send_keys("ATID Blue Shoes") # escrever o nome do produto
        # driver.find_element(By.CLASS_NAME, "wc-block-product-search__button").click() # clicar na busca pelo produto
        # time.sleep(3)
        # driver.find_element(By.XPATH, "//img[@role='presentation']").is_displayed()
        # print("The product is on the screen!🚀🚀✅🧙‍♂️")   
        # print(driver.find_element(By.CSS_SELECTOR, ".product_title.entry-title").text)
    finally:
        driver.quit()


test_product()