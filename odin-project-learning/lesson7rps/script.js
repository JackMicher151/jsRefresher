// We will learn about closures later to make something like this private
// We will learn about currying functions later, just because
const rockchar = '&#9994';
const paperchar = '&#9995';
const scisschar = '&#9996';

function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random(3));
    switch (cpuChoice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your move (Rock, Paper, or Scissors").toString();
    console.log('Player Chose ' + playerChoice);
    playerChoice = playerChoice.toUpperCase();
    return (playerChoice === 'ROCK' || playerChoice === 'PAPER' || playerChoice === 'SCISSORS') ? playerChoice : getPlayerChoice();
}

function playRound() {
    let compSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let result;

    if (compSelection === playerSelection) {
        result = 'Tie'
    }
    else {
        switch (playerSelection) {
            case 'ROCK':
                result = compSelection === 'SCISSORS' ? 'You Win!' : 'You Lose...';
            case 'PAPER':
                result = compSelection === 'ROCK' ? 'You Win!' : 'You Lose...';
            case 'SCISSORS':
                result = compSelection === 'PAPER' ? 'You Win!' : 'You Lose...';
        }
    }

    return result;
}



