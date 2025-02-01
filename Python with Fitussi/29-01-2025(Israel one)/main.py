from selenium import webdriver
from selenium.webdriver.common.by import By #localiza os elementos na pagina (por ID, por exemplo)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()

# def test_product():
    # try:
    #     # TASK 1
    #     driver.get("https://atid.store/")
    #     if "atid" in driver.current_url: 
    #         print("✅Task1: the url contains 'atid' word!")
    #     else:
    #         print("❌Task 1 failed")

    #     # TASK 2
    #     driver.find_element(By.CSS_SELECTOR, "li[id='menu-item-381'] a[class='menu-link']").click()
    #     time.sleep(2)
    #     if driver.current_url == "https://atid.store/":
    #         print("✅Task 2: click in Home redirects to home page!")
    #     else:
    #         print("❌Task 2 failed")

    #     # TASK 3
    #     if driver.find_element(By.XPATH, "(//a[@role='button'])[11]"):
    #         print("✅Task 3: Shop Now button exists in Home Page!")
    #     else: 
    #         print("❌Task 3 failed")    

        # TASK 4
       
        # for el in real_elements
             

        # nav_items = {"HOME", "STORE", "MEN", "WOMEN", "ACCESSORIES", "ABOUT", "CONTACT US"}


# nav = driver.find_element(By.XPATH, "//div[@class='ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout']")
# testing_elements = driver.find_elements(By.XPATH, "//div[@class='ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout']")
# real_elements = ['HOME', 'STORE', 'MEN', 'WOMEN', 'ACESSORIES', 'ABOUT', 'CONTACT US']
# print(testing_elements)
# print(nav)


# Elementos esperados na Navbar (modifique conforme necessário)
elementos_esperados = ['HOME', 'STORE', 'MEN', 'WOMEN', 'ACESSORIES', 'ABOUT', 'CONTACT US']

# Encontrando os elementos na navbar
try:
    navbar = driver.find_element(By.XPATH, "//nav//ul")  # Localiza a barra de navegação
    itens_navbar = navbar.text.split("\n")  # Obtém os  textos dos elementos

    # Verificação
    for item in elementos_esperados:
        if item in itens_navbar:
            print(f"[✔] '{item}' está presente na navbar.")
        else:
            print(f"[❌] '{item}' NÃO foi encontrado na navbar.")

except Exception as e:
    print("Erro ao localizar a navbar:", e)

# Fecha o navegador
driver.quit()










        # driver.find_element(By.ID, "menu-item-45").click() # clicar no botao store
        # driver.find_element(By.ID, "wc-block-search__input-1").send_keys("ATID Blue Shoes") # escrever o nome do produto
        # driver.find_element(By.CLASS_NAME, "wc-block-product-search__button").click() # clicar na busca pelo produto
        # time.sleep(3)
        # driver.find_element(By.XPATH, "//img[@role='presentation']").is_displayed()
        # print("The product is on the screen!🚀🚀✅🧙‍♂️")   
        # print(driver.find_element(By.CSS_SELECTOR, ".product_title.entry-title").text)
#     finally:
#         driver.quit()


# test_product()