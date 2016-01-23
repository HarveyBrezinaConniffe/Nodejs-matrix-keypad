# Node-Keypress

This is a small script I made to detect key presses with a matrix keypad on a Raspberry Pi.

Unfortunately the range of GPIO librarys available for nodejs is limited. I wanted to use rpi-gpio however it cannot use the built in pulldown resistors on the raspberry pi. The only library which could was pi-gpio it however took a lot of effort to get working. Pi-gpio also does not automaticly close the gpio pins. I have included a script to close the gpio pins.

Any matrix keypad should work but the keypad that I used was from radionics. 

http://ie.rs-online.com/web/p/keypads/0146014/