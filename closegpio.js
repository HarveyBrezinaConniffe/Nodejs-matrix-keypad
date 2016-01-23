var gpio = require("pi-gpio");

var x = [8, 10, 12, 16];
var y = [18, 32, 36, 5];

x.forEach(function(p) {
    gpio.close(p);
});

y.forEach(function(p) {
    gpio.close(p);
});
