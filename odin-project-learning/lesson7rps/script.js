// We will learn about closures later to make something like this private
// We will learn about currying functions later, just because

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
    compSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    
}

