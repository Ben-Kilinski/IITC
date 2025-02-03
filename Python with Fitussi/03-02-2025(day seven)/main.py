from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import logging
import time

now_time = datetime.now().strftime("%H-%M-%S")

logging.basicConfig(
    filename=f"app_test_{now_time}.log",  # Log messages will be written to 'app.log'
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
driver = webdriver.Chrome(service=service, options=options)

logging.info("Navigating to the URL... ✅")
driver.get("https://the-internet.herokuapp.com/javascript_alerts")

#Get Js Alert Button
try: 
    js_alert_btn = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//ul/li[1]/button'))
    )
    
    assert js_alert_btn.is_displayed, "Error Not Found Button! 🆘"
    logging.info("Button Found... ✅")
    
    logging.info("Clicking Button...")
    
    js_alert_btn.click()
    
    logging.info("Alert Button Clicked!✅")
    
    alert = driver.switch_to.alert
    assert "I am a JS Alert" in alert.text, "Text Does not match the alert"
    logging.info("Text Does match the alert!✅")    
    alert.accept()
    driver.switch_to.window
except TimeoutException:
    logging.error("Button Wasnt Found in Time! 🆘")
except AssertionError as e:
    logging.error(e)

# Get JS Confirm Button
try: 
    js_confirm_btn = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//ul/li[2]/button'))
    )
    
    assert js_confirm_btn.is_displayed, "Error Not Found Button! 🆘"
    logging.info("Button Found... ✅")
    
    logging.info("Clicking Button...")
    
    js_confirm_btn.click()
    
    logging.info("Alert Button Clicked!✅")
    
    alert = driver.switch_to.alert
    
    assert "I am a JS Confirm" in alert.text, "Text Does not match the alert"
    logging.info("Text Does match the alert!✅")
    alert.accept()
    driver.switch_to.window
    # time.sleep(5)
except TimeoutException:
    logging.error("Button Wasnt Found in Time! 🆘")
except AssertionError as e:
    logging.error(e)

#-------------------------------------------------------------------------------------------------------------------------------------------------------------
#Checking prompt
try:
    # Iniciar WebDriver
    driver = webdriver.Chrome()
    driver.get("https://the-internet.herokuapp.com/javascript_alerts")
    
    # Encontrar e clicar no botão que ativa o prompt
    try:
        prompt_btn = driver.find_element(By.XPATH, "//button[normalize-space()='Click for JS Prompt']")
        prompt_btn.click()
    except Exception:
        logging.error(f"Erro ao encontrar ou clicar no botão: {Exception}")
        exit()
    
    # Alternar para o alerta e enviar texto
    try:
        prompt_element = driver.switch_to.alert
        prompt_element.send_keys("Vai Corinthians")
        prompt_element.accept()  # Confirma o prompt
    except Exception:
        logging.error(f"Erro ao interagir com o prompt: {Exception}")
        exit()
    
    # Esperar um momento para que o resultado seja atualizado
    time.sleep(2)
    
    # Verificar o resultado
    try:
        result = driver.find_element(By.XPATH, "//p[@id='result']")
        expected_text = "You entered: Vai Corinthians"
        assert result.text == expected_text, logging.error("❌ fix the prompt")
    except Exception:
        logging.error(f"Erro inesperado: {Exception}")
    
finally:
    logging.info("Automation Test Done! ✅")
    driver.quit()
