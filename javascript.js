const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}


function getPlayerChoice() {
    const playerSelection = prompt('Your choice is ?\nRock, Paper or Scissors?');
    if (playerSelection.toLowerCase() === 'rock') {
        return 'rock';
    } else if (playerSelection.toLowerCase() === 'paper') {
        return 'paper';
    } else if (playerSelection.toLocaleLowerCase() === 'scissors') {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection  = getPlayerChoice();

    let getWinner;
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);


    if(playerSelection === computerSelection) {
        return getWinner = 'tie';
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return getWinner = 'player';
    } else {
            return getWinner = 'computer';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const winner = playRound(getPlayerChoice, getComputerChoice);
        
        if (winner === 'player') {
            console.log(` >You won!`);
            playerScore++;
        } else if (winner === 'computer') {
            console.log(` >Computer won!`);
            computerScore++;
        } else {
            console.log(` >It's a tie!`);
        }
    }
    console.log(`\nComputer score: ${computerScore}`);
    console.log(`Player score: ${playerScore}`);
    if (playerScore > computerScore) {
        console.log('You are the match winner!')
    } else if (computerScore > playerScore) {
        console.log('Computer is the match winner');
    } else {
        console.log("It's a tie!");
    }
}

game();


