# Source

https://peppe8o.com/capacitive-soil-moisture-sensor-with-raspberry-pi-pico-wiring-code-and-calibrating-with-micropython/
https://microsoft.github.io/IoT-For-Beginners/#/2-farm/lessons/2-detect-soil-moisture/README

# Calibrate the Capacitive Soil Moisture Sensor with Raspberry PI Pico

Every sensor can have a different production process and, for this reason, can give different raw results. Moreover, every soil can have a different electricity conduction value. For this reason, a calibration is strongly recommended in order to get reliable values.

We’ll start by measuring the maximum value, that can get in DRY soil. The process is:

1. Put the sensor in the dry soil
2. Press the soil around the sensor
3. Run the capacitive-soil-pico.py code from Raspberry PI Pico connected to your PC and check the serial monitor (shell) to compare the read values.
4. Take higher value and set it to “max_moisture” variable in your capacitive-soil-pico.py

Now we have to repeat the process to get the lower value. This can be achieved with the following steps:

1. Put the capacitive soil moisture sensors in an empty glass
2. Filling the glass with water until the level reaches quite all the sensor (keep electrical components outside the water)
3. Run the capacitive-soil-pico.py code from Raspberry PI Pico connected to your PC and check the serial monitor (shell) to compare the read values.
4. Take the lower value and set it to min_moisture variable in your capacitive-soil-pico.py
