import keyboard
import webbrowser 
import time
import pyautogui
def try1():
    url=input("give the url to scroll down")
    webbrowser.open_new_tab(url) 
    pyautogui.moveTo(1170,606)
 
    keyboard.press("down")


    flag=0
  
    for i in range(0,50000): 
        keyboard.press("down") 
        keyboard.release("down")
        if flag%500==0:
            flag=flag+1
        #    pass
            
        time.sleep(1)
    pyautogui.moveTo(1170,606)
    for i in range(0,30000): 
        keyboard.press("down") 
        keyboard.release("down")
        if flag%500==0:
            flag=flag+1
    
            
        time.sleep(3)   
if __name__ == "__main__":
    try1()
