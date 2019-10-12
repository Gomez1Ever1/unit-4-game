var randNum = 0;
var totalScore = 0;
var crystalValues = {
    gem1: "", gem2: "", gem3: "", gem4: ""
};

function initialize() {
    var newRandNum = getRandNum(19, 120);
    $("#randomNumber").text(newRandNum);
    getRandomGem();
}
function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function changingText(variable, content) {
    content.text = variable;
}
function getRandomGem() {
    for (var newVal in crystalValues) {
        if (crystalValues.hasOwnProperty(newVal)) {
            var gemNum = getRandNum(1, 20);
            crystalValues[newVal] = gemNum;
            changingText(gemNum, newVal);
        };
    } console.log(crystalValues);
}
function boxClick(gem) {
    var numAdd = gem + totalScore;
    totalScore = numAdd;
    console.log(totalScore)
}
initialize();
$("#accScore").text(totalScore);
$("#box1").on("click", boxClick(crystalValues.gem1));