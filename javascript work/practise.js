
// var sum = function (array) {
// 	return array.reduce(function(prev,current) {
//     	return current + prev;
//     })
//  }

// function output (result) {
// 	console.log(result);
// }

// function sum2(array, callback) {
// 	var summed = sum(array);
// 	 callback(summed);
// }

// var a = sum2([1,2,3], output);

// function blastOff(count) {
	
// 	var current = count;

// 	console.log(current);

// 	function postNumber() {
// 		current --;
// 		console.log(current)
// 		if (current >0) {
// 			setTimeout(postNumber, 1000);
// 		} else {
// 			console.log("Blast Off")
// 		}
// 	}

// 	setTimeout( postNumber, 1000)
	
// }

// var timer = blastOff(5)

// for (current; current >=1; current--) {
// 		console.log(current);
// 		}


"use strict"

var fs = require("fs");

function print(error, content) {

	if (error) {
		console.log("Maybe the 3rd time")
	} else {
		console.log("Success!", content);
	}
	
}

fs.readFile("file.txt", "utf-8", print);