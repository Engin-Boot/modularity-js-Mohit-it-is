var testColorToNumber = require("./testColortoNumber.js");
var testNumberToPair = require("./testNumbertoPair.js");
const codingManual = require("./codingManual.js");
const ToString = require("./codingManual.js");

//console.log(ToString());
console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);