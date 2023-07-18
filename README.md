# neo-raspberry

https://javascript.plainenglish.io/physical-computing-with-javascript-1-8-lets-get-started-642a9954adb2

## Check connected port

`$ kaluma ports`

## Connect to terminal

`$ screen /dev/tty.usbmodem112201 115200`

## Upload Code to raspberry Pi with Kaluma

`$ kaluma flash index.js —port /dev/tty.usbmodem112201`

## Upload code with package json

`$ kaluma flash read-temperature-and-humidity.js —port /dev/tty.usbmodem112201 --bundle`

## Free resource

`$ lsof | grep usbserial`
`$ screen -x 27127`

# INPUT/OUTPUT

The signal can be of input and output type.

## OUTPUT

To determine the value of the output (HIGH or LOW), just figure whether the output GPIO has HIGH or LOW value

## INPUT

Input on the other hand can have HIGH or LOW depending on the external input.

Usually, if there is energy flowing into input (ex. via 3V3 output) then the value is HIGH. However, if ground is present, the energy will flow into it, and as a result, the value will be LOW

# Arduino

https://www.devdungeon.com/content/arduino-cli-tutorial

## Check libraries list

`$ arduino-cli lib list`

`$ arduino-cli config dump`

## Boards List

`$ arduino-cli board list`

## New Sketch

This creates a folder with <sketch-name> and <sketch-name.ino>

`$ arduino-cli sketch new <sketch-name>`

## Compile Sketch

Here we compile a folder

`$ arduino-cli compile --fqbn arduino:avr:leonardo <sketch-name>`

or if we are in the folder

`$ arduino-cli compile --fqbn arduino:avr:leonardo .`
