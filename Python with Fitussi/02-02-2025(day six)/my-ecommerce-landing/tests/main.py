from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import logging
import time

driver = webdriver.Chrome()
driver.maximize_window()
logging.basicConfig(level = logging.INFO)

# Acessing the localhost 
try:
    driver.get("http://localhost:5173/ ")
    print("You've reached the localhost👌")
except:
    print("error on acessing the localhost")

# Checking the title 
try:
    assert title == "MyEcommerce"
    logging.info("website title is MyEcommerce✅")
except AssertionError:
    logging.warning(f"❌ not expected website title: {driver.title}")


# Checking the Header
try:
    # Dicionário com os elementos esperados e seus respectivos XPaths
    elementos_esperados = {
        "MyEcommerce": "//h6[normalize-space()='MyEcommerce']",  # Exemplo: Título principal
        "Search Items": "//input[@id=':r1:']",  # Campo de busca
        "Dark Mode Button": "//input[@type='checkbox']",  # Botão de modo escuro
        "Cart": "//button[normalize-space()='Cart']",  # Ícone do carrinho
        "Broken Action": "//button[normalize-space()='Broken Action']",  # Link quebrado (exemplo)
    }

    # Verificar se cada elemento existe na página
    for name, xpath in elementos_esperados.items():
        elementos_encontrados = driver.find_elements(By.XPATH, xpath)
        if elementos_encontrados:
            logging.info(f"✅ Alls elements in Header")
        else:
            logging.warning(f"❌ Elemento ausente: {name}")

#Checking feature product
try:
    product_heading = driver.find_element(By.XPATH, "//div[normalize-space()='Awesome Purple T-Shirt']")
    logging.INFO(f"✅ Feature product exists: {product_heading.text()}")
except:
    logging.warning("❌Product heading not found❌")




finally:
    driver.quit()
 