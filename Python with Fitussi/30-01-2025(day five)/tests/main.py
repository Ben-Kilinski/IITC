import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC


# Inicializa o WebDriver
driver = webdriver.Chrome()
driver.maximize_window()

################################ FORM #####################################################
#1 Abre o site de demonstração
try:
    driver.get("http://localhost:5173/")
    print(driver.current_url)
except:
    print("website not found")   

#2 Localiza o formulário
try:
    form_btn = driver.find_element(By.XPATH, "//a[normalize-space()='Forms']")
except:
    print("form not found")

#3 click on form
try:
    form_btn.click()
    print(driver.current_url)
except:
    print("couldn't click on form")

#4 look for user name input 
try:
    user_name_input = driver.find_element(By.XPATH, "//input[@id='username']")
except:
    print("couldn't find user name input") 

#5 Preenche o campo de nome de usuário
try:
    user_name_input.send_keys("John Doe")
except:
    print("couldn't insert name")

#6 look for email input 
try:
    email_input = driver.find_element(By.XPATH, "//input[@id='password']")
except:
    print("couldn't find email input") 

#7 Preenche o campo de nome de usuário
try:
    email_input.send_keys("John Doe")
except:
    print("couldn't insert email")

#8 Look for form submit button
try:
    form_submit = driver.find_element(By.XPATH, "//button[normalize-space()='Login']")
except:
    print("Form submit button not found")

#9 click on form submit button
try:
    form_submit.click()
except:
    print("couldn't click on form submit button")

#10 submit the form
try:
    driver.find_element(By.XPATH, "//p[1]")
    print("Form perfect!✅🚀🚀🧙‍♂️✌️😁")
except:
    print("could not submit the form")
    


################################ Dropdpwn #################################################
#11 back to home page and look for dropdown
try:
    dropdown_nav = driver.find_element(By.XPATH, "//a[normalize-space()='Dropdowns']")
except:
    print("Dropdown not found")   

#12 click on dropdown
try:
    dropdown_nav.click()
    print(driver.current_url)
except:
    print("couldn't click on dropdown at navbar")

#13 look for select country dropdown component
try:
    selectCountry_button = driver.find_element(By.XPATH, "//select[@id='country-dropdown']")
except:
    print("select country dropdown component not found")

#14 Click the dropdown (open countries options)
# try:
#     countries_names = ("United States", "Canada", "India")
#     countries_elements = driver.find_elements(By.XPATH, "//select[@id='country-dropdown']/option")
#     for index, element in enumerate(countries_elements):
#         if index == 0:
#             continue  # Skip the first element if needed
#         elif index < len(countries_names) and element.get_attribute("value") == countries_names[index]:
#             print("All countries in the dropdown")
# except Exception as e:
#     print(f"Error: {e}")
def testSelectInput():
    driver.get("http://localhost:5173/dropdowns")
    try:
        countries_dropdown = Select(driver.find_element(By.XPATH, "//select[@id='country-dropdown']"))
        categories = [
            { 
                "select": "United States",
                "result": "US"
            }, 
            { 
                "select": "Canada",
                "result": "CA"
            }, 
            { 
                "select": "India",
                "result": "IN"
            }
        ]

        for category in categories:
            countries_dropdown.select_by_visible_text(category["select"])
            textResult = driver.find_element(By.CSS_SELECTOR, "div[id='dropdowns-container'] p").text
            if not(textResult._contains_(category["result"])):
                print("testSelectInput failed")
                return

        print("testSelectInput passed")
    except NoSuchElementException:
        print("Element not Found!")
        print("testSelectInput failed")

        
#15 Check countries 
# try:
#     Select(opened_countries)

# Seleciona um país no dropdown
# select = Select(form.find_element(By.ID, "country"))
# select.select_by_visible_text("United States")

# Continua o restante do projeto...
