import time
from machine import Pin


relay = Pin(15, Pin.OUT)

relay.on()

# while True:
#     relay.on()
#     print("TEST1")
#     time.sleep_ms(2000)
#     relay.off()
#     print("Test2")
#     time.sleep_ms(2000)