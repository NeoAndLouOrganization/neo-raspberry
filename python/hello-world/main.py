# This is your main script.

from machine import Pin

led = Pin("LED", Pin.OUT)
led.on()