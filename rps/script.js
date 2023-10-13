let playerscore = 0;
let computerscore = 0;

const buttons = document.querySelectorAll('input');
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function click(choice) {
    if (!choices.includes(choice)) throw new Error("Unknown choice chosen");
    const computerChoice = computerPlay();
    if (choice === computerChoice) console.log("tie");
    else (choice === "rock")
}