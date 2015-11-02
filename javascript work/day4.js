"use strict"

//Version 1 

class Car {

	constructor(model, speed) {
		this.model = model;
		this.speed = speed;
	}

	increaseSpeed (newspeed) {
		this.speed += newspeed;
	}

	displayState () {
		console.log(this.model + " " + this.speed);
	}
}



//Version 2
var Car = function(model, speed) {
	this.model = model;
	this. speed = speed;
};

	Car.prototype.increaseSpeed = function(newspeed) {
		this.speed += newspeed;
	};

	Car.prototype.displayState = function() {
		console.log(this.model + " " + this.speed)
	};

var ferrari = new Car("version2.0", 200);
ferrari.increaseSpeed(100);
ferrari.displayState();