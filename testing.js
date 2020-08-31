const expect = require('chai').expect;
const getPairNumberFromColors = require("./pairNumberFromColors.js");
const getColorFromPairNumber = require("./colorFromPairNumber.js");

(function() {
function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = getPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}



function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = getColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18); })();