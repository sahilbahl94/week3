var words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
];


function decode (array_words) {

	var message = "";

	array_words.forEach(function(word, index) {
		var indexLooped = index % 5
		message += word.charAt(indexLooped);
	});	

	return message;
}


var message = decode(words);
console.log(message);

module.exports = decode;


