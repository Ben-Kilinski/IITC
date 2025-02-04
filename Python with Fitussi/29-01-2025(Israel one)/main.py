from selenium import webdriver
from selenium.webdriver.common.by import By #localiza os elementos na pagina (por ID, por exemplo)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()


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
expected_elements = {
    "HOME": "//li[@id='menu-item-381']//a[@class='menu-link'][normalize-space()='Home']",
    "STORE": "//li[@id='menu-item-45']//a[@class='menu-link'][normalize-space()='Store']",
    "MEN": "//li[@id='menu-item-266']//a[@class='menu-link'][normalize-space()='Men']",
    "WOMEN": "//li[@id='menu-item-267']//a[@class='menu-link'][normalize-space()='Women']",
    "ACCESSORIES": "//li[@id='menu-item-671']//a[@class='menu-link'][normalize-space()='Accessories']",
    "ABOUT": "//li[@id='menu-item-828']//a[@class='menu-link'][normalize-space()='About']",
    "CONTACT US": "//li[@id='menu-item-829']//a[@class='menu-link'][normalize-space()='Contact Us']",
}
# Convert expected keys to a properly formatted list
expected_texts = list(expected_elements.keys())
found_elements = []
for el, xpath in expected_elements.items():
    try:
        # Ensure the element is visible before interacting with it
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, xpath))
        ).text

        # Normalize extracted text: remove extra spaces, handle non-breaking spaces, convert to uppercase
        normalized_text = element.strip().replace("\xa0", " ")
        found_elements.append(normalized_text)

    except Exception as e:
        print(f"⚠️ Warning: Could not find element '{el}' due to error: {e}")
        found_elements.append(None)  # Append None to mark missing elements
    # Debugging output
    print("Expected:", expected_texts)
    print("Found:", found_elements)
# Perform the comparison
if found_elements == expected_texts:
    print("✅ Task 4: All expected navBar elements were found!")
else:
    print("❌ Task 4 failed: Some elements are missing or incorrect!")

# TASK 5 







driver.quit()









