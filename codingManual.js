var MajorColors = require("./minor_major_color").MajorColors;
var MinorColors = require("./minor_major_color").MinorColors;
const GetColorFromPairNumber = require("./colorFromPairNumber.js");

function ToString(){
    let color_number_combination = {};
    let manual_string = "Number" + " "+ "Major" + " "+ "Minor" +"\n";
    let pair_number = 1;
    for(pair_number=1; pair_number<=25;pair_number++){
        color_number_combination = GetColorFromPairNumber(pair_number);
        manual_string += "  "+pair_number +" : " + color_number_combination.major+" " 
                            + color_number_combination.minor +"\n";
    }
    return manual_string;
}

module.exports = ToString;