var MajorColors = require("./minor_major_color").MajorColors;
var MinorColors = require("./minor_major_color").MinorColors;
const GetColorFromPairNumber = require("./colorFromPairNumber.js");

function ToString(){
    let color_number_combination = {};
    let pair_number = 1;
    for(pair_number=1; pair_number<=25;pair_number++){
        //color_number_combination["number_" + pair_number] = pair_number;
        color_number_combination["pair_number = "+pair_number] = GetColorFromPairNumber(pair_number);
    }
    return color_number_combination;
}

module.exports = ToString;