function eat (food) {
	if (food === "pizza") {
		console.log("Yay " + food + " !!");
	} else if (food === "cookies") {
		console.log(food + " are good too");
	} else {
		console.log("wtf man");
	}
}

eat("pizza");
eat("cookies");
eat("beans");

function sayHi(name) {
	console.log("Hello " + name);
}

function sayGoodbye(name) {
	console.log( "Goodbye " + name);
}

function myfunc(func1, func2, first, string) {
	if (first) {
		func1(string);
	}
	else {
		func2(string);
	}
}

myfunc(sayHi,sayGoodbye, true, "Sahil")

var numbers = "80:70:90:100";



function statsColon(string) {
	var array = string.split(":");

	var new_array = array.map(function(strNum) {
		return parseInt(strNum);
	});

	var total = array.reduce(function(sum,number) {
		return sum + parseInt(number);}, 0);

	var	desc_array = new_array.sort(function(a,b){return b-a});

	var stats = {
		avg: total/array.length,
		max: desc_array[0],
		min: desc_array[(new_array.length - 1)],
	};

	return stats
}


var stats = statsColon(numbers);
console.log(stats);