const { MajorColors, MinorColors } = require("./minor_major_color");
const getColorFromPairNumber = require("./colorFromPairNumber.js");

function toString() {
    let color_number_combination = {};
    let manual_string = "Number" + " " + "Major" + " " + "Minor" + "\n";
    let pair_number = 1;
    let total_pair = MajorColors.length * MinorColors.length;
    for (pair_number = 1; pair_number <= total_pair; pair_number++) {
        color_number_combination = getColorFromPairNumber(pair_number);
        manual_string += "  " + pair_number + " : " + color_number_combination.major + " "
            + color_number_combination.minor + "\n";
    }
    return manual_string;
}
//Executes testing.js
require("./testing.js");

