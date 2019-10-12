var newRandNum;
var newScore;
var totalScore;
var crystalValues = {
    gem1: "", gem2: "", gem3: "", gem4: ""
};
var wins = 0;
var losses = 0;
function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min + .9)) + min;
}
function startGame() {
    newRandNum = getRandNum(19, 120);
    $("#randomNumber").text(newRandNum);
    getRandomGem();
    totalScore = 0;
    $("#accScore").text(totalScore);
    $("#winCounter").text(wins);
    $("#lossCounter").text(losses);
}
function updateScore() {
    totalScore = newScore + totalScore;
    $("#accScore").text(totalScore);
}
function getRandomGem() {
    for (var newVal in crystalValues) {
        if (crystalValues.hasOwnProperty(newVal)) {
            var gemNum = getRandNum(1, 12);
            crystalValues[newVal] = gemNum;
        };
    } console.log(crystalValues);
}
function boxClick(difNum) {
    newScore = difNum;
    return newScore;
}
function isGameOver() {
    if (totalScore > newRandNum) {
        alert('Game Over');
        losses++;
        startGame();
    }
    else if (totalScore === newRandNum) {
        alert("you win!");
        wins++;
        startGame();
    }
}
startGame();
$("#box1").on("click", function click1() {
    boxClick(crystalValues.gem1);
    updateScore();
    isGameOver();
});
$("#box2").on("click", function click2() {
    boxClick(crystalValues.gem2);
    updateScore();
    isGameOver();
});
$("#box3").on("click", function click3() {
    boxClick(crystalValues.gem3);
    updateScore();
    isGameOver();
});
$("#box4").on("click", function click4() {
    boxClick(crystalValues.gem4);
    updateScore();
    isGameOver();
});