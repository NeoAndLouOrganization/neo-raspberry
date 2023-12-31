from machine import ADC, Pin
import utime

soil = ADC(Pin(26))

# Calibration values
# min_moisture = 0
# max_moisture = 65535

min_moisture = 17172
max_moisture = 40329

readDelay = 0.5

while True:
    moisture = (max_moisture-soil.read_u16())*100/(max_moisture-min_moisture) 
    print("moisture: " + "%.2f" % moisture +"% (adc: "+str(soil.read_u16())+")")
    utime.sleep(readDelay)
