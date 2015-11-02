var decode = require("./decode.js")


function superDecoder(sentence, optionString) {
	var words = sentence.split(" ");
	var options = optionString.split("-");

	var odd_condition = function(word,index) {
		if ((index + 1) % 2 !== 0) {
			return word;
		}
	};

	var even_condition = function(word,index) {
		if ((index) % 2 === 0) {
			return word;
		}
	};


	if (options[0] === "odd") {
		words_odd = words.filter(odd_condition);
		words_reversed = words_odd.reverse();
		decoded = decode(words_reversed);
		return decoded;
	} else if (options[1] === "even") {
		words_even = words.filter(even_condition);
		words_reversed = words_even.reverse();
		decoded = decode(words_reversed);
	}

}

var sentence = "fill the proper tank for the cow";
var secret = superDecoder(sentence, "even-backwards");
// should return "cool"