# This is your main script.

from machine import Pin

led = Pin(15, Pin.OUT)
led.on()