from selenium import webdriver
from selenium.webdriver.common.by import By #localiza os elementos na pagina (por ID, por exemplo)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()

def test_product():
    try:
        driver.get("https://atid.store/") # home page
        driver.find_element(By.ID, "menu-item-45").click() # clicar no botao store
        driver.find_element(By.ID, "wc-block-search__input-1").send_keys("ATID Blue Shoes") # escrever o nome do produto
        driver.find_element(By.CLASS_NAME, "wc-block-product-search__button").click() # clicar na busca pelo produto
        time.sleep(3)
        driver.find_element(By.XPATH, "//img[@role='presentation']").is_displayed()
        print("The product is on the screen!🚀🚀✅🧙‍♂️")   
        print(driver.find_element(By.CSS_SELECTOR, ".product_title.entry-title").text)
    finally:
        driver.quit()


test_product()