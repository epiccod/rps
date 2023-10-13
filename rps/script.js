let playerscore = 0;
let computerscore = 0;

const buttons = document.querySelectorAll('input');
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function click(choice) {
    if (!choices.includes(choice)) throw new Error("Unknown choice chosen");
    const computerChoice = computerPlay();
    if (choice === computerChoice) console.log("tie");
    else (choice === "rock")
}

if (computerscore == 5){
    result += '<br><br>The computer beat you dumbass. Reload the page to play again'
    disablebuttons()
}

if (playerscore == 5){
    result += '<br><br>You won the game! Reload the page to play again'
    disablebuttons()
}
