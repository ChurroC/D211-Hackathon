import { generate } from "random-words";

let wordsFound = [generate()];
let currentWord;
let score = 0;
let lives = 3;
currentWord = generate();

//function generateWord() {
/* console.log("generate");
    currentWord = generate();
    print(currentWord);
    console.log(currentWord);
    // just to test
    console.log(lives);
    console.log(score);
    if (lives == 0) {
        console.log("Game over");
    } */

window.seenWords = function seenWords() {
    console.log("made into function(seenWords)");
    console.log(score);
    console.log(lives);

    if (wordsFound.includes(currentWord)) {
        score++;
    } else {
        lives--;
        gameOver(lives);
    }

    displayWord();
    show();
};

window.newWords = function newWords() {
    console.log("made into function(newWords)");
    console.log(score);
    console.log(lives);

    if (wordsFound.includes(currentWord)) {
        lives--;
        gameOver(lives);
    } else {
        wordsFound.push(currentWord);
        score++;
    }
    displayWord();
    show();
};

function showHideTextBox(id) {
    // testing purposes
    console.log("inside showhidetextbox");
    var x = document.getElementById(id);
    if (x.style.visibility == "visible" || x.style.visibility == "") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}

function displayWord() {
    if (randomInt(1, 5) == 1) {
        currentWord = wordsFound[randomInt(0, wordsFound.length - 1)];
    } else {
        currentWord = generate();
    }
}

function show() {
    console.log("show");
    document.getElementById("word").innerHTML = "Word: " + currentWord;
    document.getElementById("score").innerHTML = "Score " + score;
    document.getElementById("lives").innerHTML = "Lives " + lives;
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function gameOver(lives) {
    if (localStorage.getItem("verbal-storage") < score) {
        localStorage.setItem("verbal-storage", score);
    }
    if (lives == 0) {
        showHideTextBox("hiddenStuff");
        //showHideTextBox("lives");
        //showHideTextBox("score");
        //showHideTextBox("word");
        //showHideTextBox("see");
        document.getElementById("over").innerHTML = "Game Over";
        await sleep(1000);
        document.getElementById("three").innerHTML = "Starting new game in 3";
        await sleep(1000);
        document.getElementById("two").innerHTML = "Starting new game in 2";
        await sleep(1000);
        document.getElementById("one").innerHTML = "Starting new game in 1";
        await sleep(500);
        window.location.reload();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.start = function start() {
    showHideTextBox("seen");
    displayWord();
    show();
    showHideTextBox("hiddenStuff");
    document.getElementById("over").innerHTML = "";
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
};
