"use strict"

var quiz = function() {
	this.questions = []
}

var question = function(text, answer) {
	var id = 0
	this.text = text;
	this.answer = answer;
	this.id = id + 1;
}

var question1 = new question("Capital of India?", "New Delhi")
var question2 = new question("Capital of Maharasthra?", "Mumbai")
var question3 = new question("Capital of UK?", "London")

console.log(question1);
console.log(question2);
console.log(question3);