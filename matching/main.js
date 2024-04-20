let upperBound = 10;
let score = 0;
let randNum = 1;

// Description: Return a random integer, n, such that min <= n <= max
// Citation: Mozilla Foundation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Input/Parameters: Two floating point numbers, min and max
// Output/Return: Returns a random integer between min and max

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Description: Pauses the code for the length of ms milliseconds
//Citation: educative.io
//https://www.educative.io/answers/what-is-the-javascript-alternative-to-the-sleep-function
//Input: A number
//Output: Pauses the code for the
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function numberMemory() {
    console.log("main");
    randNum = randomInt(upperBound / 10, upperBound - 1);
    console.log(randNum);
    document.getElementById("num").innerHTML = randNum;
    await sleep(1000);
    console.log("alf");
    document.getElementById("num").innerHTML = "";
    showHideTextBox("hiddenStuff");
}

async function check() {
    let cont = true;
    let inputNum = document.getElementById("input").value;
    let output = "The number was " + randNum;
    showHideTextBox("hiddenStuff");
    console.log(randNum);
    console.log(inputNum);
    if (randNum == inputNum) {
        score = score + 1;
        upperBound = upperBound * 10;
    } else {
        cont = false;
    }
    output += "<br> you entered " + inputNum;
    document.getElementById("num").innerHTML = output;
    await sleep(1200);
    document.getElementById("score").innerHTML = "Score: " + score;
    sleep(200);
    document.getElementById("num").innerHTML = "";
    if (cont) {
        console.log("rec");
        numberMemory();
    } else {
        showHideTextBox("start");
        console.log("half");
        output = "Your final score was " + score;
        if (localStorage.getItem("matching-storage") < score) {
            localStorage.setItem("matching-storage", score);
        }
        console.log(output);
        document.getElementById("num").innerHTML = output;
        console.log("out");
        await sleep(500);
        document.getElementById("score").innerHTML = "";
        score = 0;
        document.getElementById("num").innerHTML = "";
        console.log("heh");
        upperBound = 10;
    }
}

function showHideTextBox(box) {
    console.log("box");
    var x = document.getElementById(box);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
