let sequence = [];
let num = "";
let score = 0;

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

async function showHideTextBox(box) {
    console.log("box");
    var x = document.getElementById(box);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

async function displayGrid() {
    let randInt = randomInt(1, 6);
    //num += randInt;
    sequence.push(randInt);
    switch (randInt) {
        case 1:
            num += "r";
            break;
        case 2:
            num += "o";
            break;
        case 3:
            num += "y";
            break;
        case 4:
            num += "g";
            break;
        case 5:
            num += "b";
            break;
        case 6:
            num += "p";
            break;
    }
    for (i = 0; i < sequence.length; i++) {
        console.log(sequence[i]);
        switch (sequence[i]) {
            case 1:
                document.body.style.background = "#ff0000";
                await sleep(500);
                document.body.style.background = "lightgrey";
                break;
            case 2:
                document.body.style.background = "orange";
                await sleep(500);
                document.body.style.background = "lightgrey";
                break;
            case 3:
                document.body.style.background = "yellow";
                await sleep(500);
                document.body.style.background = "lightgrey";
                break;
            case 4:
                document.body.style.background = "green";
                await sleep(500);
                document.body.style.background = "lightgrey";
                break;
            case 5:
                document.body.style.background = "blue";
                await sleep(500);
                document.body.style.background = "lightgrey";
                break;
            case 6:
                document.body.style.background = "purple";
                await sleep(500);
                document.body.style.background = "lightgrey";
                num += "p";
                break;
        }
        //document.body.style.background = "lightgrey";
        await sleep(500);
    }
    showHideTextBox("hiddenStuff");
    console.log(num);
}

async function check() {
    showHideTextBox("hiddenStuff");
    let input = document.getElementById("input").value;
    console.log(input);
    if (input == num) {
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        document.getElementById("input").value = "";
        displayGrid();
    } else {
        document.getElementById("info").innerHTML =
            "You had a final score of " + score;
        document.getElementById("score").innerHTML = "";
        console.log(localStorage.getItem("grid-storage"));
        console.log(score);
        if (localStorage.getItem("grid-storage") < score) {
            localStorage.setItem("grid-storage", score);
        }
        score = 0;
        sequence = [];
        await sleep(500);
        document.getElementById("info").innerHTML = "";
        showHideTextBox("start");
        document.getElementById("input").value = "";
        num = "";
    }
}
