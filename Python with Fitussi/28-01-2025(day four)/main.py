from selenium import webdriver
from selenium.webdriver.common.by import By #localiza os elementos na pagina (por ID, por exemplo)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome() #inicia o navegador usando o webdriver

def test_positive_login():
    try:
        # Abrir a página de login #✅
        driver.get("https://practicetestautomation.com/practice-test-login/")
        
        # Digitar nome e senha #✅
        driver.find_element(By.ID, "username").send_keys("student") 
        driver.find_element(By.ID, "password").send_keys("Password123")
        
        # Clicar no botão de login #✅
        driver.find_element(By.ID, "submit").click()
        
        # Verificar redirecionamento para a URL de sucesso✅🧙‍♂️
        WebDriverWait(driver, 10).until(
            lambda driver: "logged-in-successfully" in driver.current_url
        )
        assert "logged-in-successfully" in driver.current_url, "Login failed, URL not redirected"
        
        # Verificar a presença do texto esperado na página
        body_text = driver.find_element(By.TAG_NAME, "body").text
        assert "Congratulations" in body_text or "successfully logged in" in body_text, "Expected text not found"
        
        print("Positive login test passed🚀🚀🚀🚀✅✅✅")
    finally:
        driver.quit()

test_positive_login()
