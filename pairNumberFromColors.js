const {MajorColors,MinorColors} = require("./minor_major_color");

function getMajorIndex(majorColor){
    let majorIndex = 0;
    for(majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    return majorIndex;
}

function getMinorIndex(minorColor){
    let minorIndex = 0;
    for(minorIndex = 0; minorIndex < MinorColors.length; minorIndex++) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return minorIndex;
}
function getPairNumberFromColors(majorColor, minorColor) {
    let majorIndex = getMajorIndex(majorColor);
    let minorIndex = getMinorIndex(minorColor); 
    return majorIndex * MinorColors.length + minorIndex + 1;
}

module.exports = getPairNumberFromColors;