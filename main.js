var prompt = require('prompt-sync').prompt;

console.log("What is your name?");

var name = prompt(); 

if(name) {
	console.log('You got this ' + name + '!' + '' + 'lets get started...');
}

var tac = 0;

console.log("Question 1: What's the default display value of a DIV element?");

var ca1 = "block";
var res1 = prompt();

if(res1 == ca1) {
	console.log('Nice, good job');
	tac++;
}

else {
	console.log('Negative, the correct answer was block');
}

console.log("Question 2: True or False, CSS stands for Cascading Super Squirrels?");

var ca2 = "false";
var res2 = prompt();

if(res2 == ca2) {
	console.log('Nice, good job');
	tac++;
}

else {
	console.log("C'mon bro, let's be serious");
}

console.log("Question 3: In a computer language, a group of words, numbers, and operators that performs a specific task is a ?");

var ca3 = "statement";
var res3 = prompt();

if(res3 == ca3) {
	console.log('Nice, good job');
	tac++;
}

else {
	console.log("C'mon bro, let's be serious, the correct answer was statement");
}

console.log("Question 4: The rules for valid format and combinations of instructions is called a computer language, this is also sometimes referred to as its?");

var ca4 = "syntax";
var res4 = prompt();

if(res4 == ca4) {
	console.log('#YouDaBest');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca4);
}

console.log("Question 5: What does WWW stand for?");
var ca5 = "world wide web";
var res5 = prompt();

if(res5 == ca5) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca5);
}

console.log("Question 6: HTML is composed of small units called?");
var ca6 = "tags";
var res6 = prompt();

if(res6 == ca6) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca6);
}

console.log("Question 7: With CSS, you are able to make styles apply to only certain elements by grouping properties within ?");
var ca7 = "selectors";
var res7 = prompt();

if(res7 == ca7) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca7);
}

console.log("Question 8: This CSS property allows us to change the default way the box model affects elements.");
var ca8 = "box-sizing";
var res8 = prompt();

if(res8 == ca8) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca8);
}

console.log("Question 9: The default value of the position property is?");
var ca9 = "static";
var res9 = prompt();

if(res9 == ca9) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca9);
}

console.log("Question 10: These positioned elements are positioned relative to the browser window?");
var ca10 = "fixed";
var res10 = prompt();

if(res10 == ca10) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca10);
}

console.log("Question 11: 'Print', 'screen', and 'all' are all common types of?");
var ca11 = "media querys";
var res11 = prompt();

if(res11 == ca11) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca11);
}

console.log("Question 12: Most programming languages (like javascript) are separated into things called?");
var ca12 = "expressions";
var res12 = prompt();

if(res12 == ca12) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca12);
}

console.log("Question 13: json is a way to format?");
var ca13 = "data";
var res13 = prompt();

if(res13 == ca13) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca13);
}

console.log("Question 14: json is short for?");
var ca14 = "javascript object notation";
var res14 = prompt();

if(res14 == ca14) {
	console.log('correct');
	tac++;
}

else {
	console.log("Negative, the correct answer was " + ca14);
}

console.log("Question 15: traditionally at the end of a statement in javascript you need to put a?");
var ca15 = "semicolon";
var res15 = prompt();
var semi = ";";

if((res15 == ca15) || (res15 == semi )) {
	tac++;
	console.log('correct');
	console.log('You answered '+ tac + ' questions correctly');

}

else {
	console.log("Negative, the correct answer was " + ca15);
}

var perc = (tac/15) * 100;

console.log("That's " + Math.floor(perc) + " % , thanks for taking this quiz!");
