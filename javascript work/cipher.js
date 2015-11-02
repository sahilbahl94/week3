"use strict"

function caesarCipher (message, shift) {

	shift = typeof shift !== "undefined" ? shift: -3;

	var array = message.split("")
	var number_array = array.map(function(letter) {

		var value = letter.charCodeAt(0)

		if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
			if ((value + shift) > 122 || (value + shift) < 97) {
				return String.fromCharCode((((value - 97) + shift) % 26) + 97);
			} else if ((value + shift) > 90 || (value + shift) < 65) { 
				return String.fromCharCode((((value - 65) + shift) % 26) + 65);
			} else {
				return String.fromCharCode(letter.charCodeAt(0) + shift);
			}	
		} else {
			return letter;
		}
	});

	return number_array.join("")
}


var encrypted = caesarCipher("brutus");
console.log(encrypted);

var encrypted2 = caesarCipher("Et tu, brute?", 6);
console.log(encrypted2);

