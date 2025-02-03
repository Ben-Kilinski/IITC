import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

driver = webdriver.Chrome()
driver.get("https://www.futbin.com/")
search = driver.find_element(By.XPATH, "//a[@class='nav-link'][normalize-space()='Players']")
search.send_keys("Pele")  # Digitar o texto
search.send_keys(Keys.RETURN)  # Pressionar ENTER


