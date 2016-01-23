var async = require('async');

var gpio = require("pi-gpio");
//A 2 dimensional array of your keypad.
var kp = [["1","2","3"],
          ["4","5","6"],
	  ["7","8","9"],
	  ["*","0","#"]];
// The X and Y pin numbers
var x = [8, 10, 12];
var y = [18, 32, 36, 16];

var lx = 0;
var cx = 0;

var ls = {};

function kpress(key) {
    //Debounce keypress
    if(!ls[key] == 1) {
	//A key has been pressed!!!
	console.log(key);
	ls[key] = 1;
    }
}
//Export pins
async.each(x, function(cx, cb1) {
    console.log("Exporting "+cx);
    gpio.open(cx, "output", function() {
	cb1();
    });
}, function(err) {
    if (err) {
	console.log("Oh Oh big problem with rpigpi setup: "+err);
    }
    else {
	async.each(y, function(cy, cb2) {
	    console.log("Exporting "+cy);
	    gpio.open(cy, "input pulldown", function() {
		cb2();
	    });	
	}, function(err) {
	    if (err) {
		console.log("Oh Oh big problem with rpigpi setup: "+err);
	    }
	    else {
		r();
	    }
	});
    }
});

var r = function() {
    gpio.write(x[lx], 0);
    gpio.write(x[cx], 1);
    lx = cx;

    for(var i = 0; i < 4; i++) {
	(function(i, y, x, cx) {
	    gpio.read(y[i], function(err, value) {
	    if(value == 1) {
		kpress(kp[i][cx]);
	    }
	    else {
		if(ls[kp[i][cx]] == 1) {
		    var val = kp[i][cx];
		    ls[val] = 0;
		}
	    }
		
	    });
	})(i, y, x, cx);
    }

    if(cx == 2) {
	cx = 0;
    }
    else {
	cx++;
    }

    setTimeout(r, 10);
}
