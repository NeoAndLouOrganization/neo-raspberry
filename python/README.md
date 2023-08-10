# https://projects.raspberrypi.org/en/projects/getting-started-with-the-pico/2

# https://www.circuitbasics.com/how-to-write-and-run-a-python-program-on-the-raspberry-pi/

# https://peppe8o.com/first-steps-with-raspberry-pi-pico-for-beginners/

# Install Micro Python

To run python on micro boards, we need to install an interpreter for python so that python scripts can be read on the board. You can find an UF2 file here - https://micropython.org/download/rp2-pico-w/. Alternatively, you can use the `.uf2` from this folder.

Download the latest and install it on micro controller (ex. raspberry pi). Click on bootsel so that micro-controller so that it can appear in tyour folders and then drag and drop the micropython firmware onto board.

More info - https://www.raspberrypi.com/documentation/microcontrollers/micropython.html

Once installed. double-check that python works on the board. You can access the REPL via USB Serial. Example for mac

`$ screen /dev/tty.usbmodem112201 115200`

Click enter and you should be on board! Test that python works

```python
print("Hello World")
```

# Install Micro Python extensions for vsCode

Install Micropython IDE and Microphyon-REPLink, autopep8, Pylance, Python. Follow on with installing all the required dependencies suggested by the extensions.

# Pylance - nice to have

It is nice to have warnings in code highlighted correctly. Pylance does that, but we need to configure it properly. Essentially, Pylance needs to know the path where the projects are installed. Lets make sure this one is correct:

1. Make sure you know the location of your import; you can find it with:

```python
python
>>> import modulename
>>> print(modulename.__file__)
```

# Create Project

Using Micropython extension we can create a project. On the bottom nav bar in the left corner you can see Micropython. Click on it and dropdown from the top-bar will appear. Select new project. When created, you should see a new folder with `boot.py` and `main.py`

# Usin Ampy to run and upload files to micro controller

Source - https://mikeesto.medium.com/uploading-to-the-raspberry-pi-pico-without-thonny-53de1a10da30

## Check file contents

`$ ampy --port /dev/tty.usbmodem112301 ls`

## Run code

Note the command bellow does not upload code on board
`$ ampy --port /dev/tty.usbmodem112301 run main.py`

## Upload file

`$ ampy --port /dev/tty.usbmodem112301 put main.py`

## Deploy Code so that it runs on microcontroller.

For that, we need to upload file `main.py`, if it has its name, then microcontroller will run this code everytime it is on by default.
Simply upload file, and then restart your microcontroller.

## Installing Packages

https://docs.micropython.org/en/latest/reference/packages.html

## Remove file

`$ ampy --port /dev/tty.usbmodem112301 rm main.py`

## Remove Dir

`$ ampy --port /serial/port rmdir /foo/bar`
