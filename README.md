# Node-Keypress

This is a small script I made to detect key presses with a matrix keypad.

Unfortunately the range of GPIO librarys available for nodejs is limited. I wanted to use rpi-gpio however it cannot use the built in pulldown resistors on the raspberry pi. The only library wich could was pi-gpio it however took a lot of effort to get working. pi-gpio also does not automaticly close the gpio pins. I have included a script to close the gpio pins.