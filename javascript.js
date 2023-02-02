// Scissors > Paper
// Paper > Rock
// Rock > Scissors

const options = ["rock", "paper", "scissors"];

let playerChoice;
let onClick = 0;
let playerScore = 0;
let computerScore = 0;

// Function that randomly decide computer choice
function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Function that has logic to deside who is the winner of the round and returns a string
function whoWins(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
            return "player";
    }
    else {
        return "computer"
    }
}

function playRound(playerSelection, computerSelection) { 
        if (playerScore !== 5 && computerScore !== 5) {
            roundCounter.textContent = `${onClick}`;
    
            playerSelection = playerChoice;
            computerSelection = getComputerChoice();

            if (whoWins(playerSelection, computerSelection) === 'player') {
                playerScore++;
            }
            else if(whoWins(playerSelection, computerSelection) === 'computer') {
                computerScore++;
            }
            displayPlayerChoice.textContent = playerSelection;
            displayComputerChoice.textContent = computerSelection;

            playerScoreCounter.textContent = playerScore;
            computerScoreCounter.textContent = computerScore;
        } else {
            gameOver();
            winnerIs();
        }
}

const newGameContainer = document.querySelector('.try-again-container');
const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play Again';
playAgainBtn.style.height = '50px';
playAgainBtn.style.width = '80px';
playAgainBtn.style.marginBottom = '20px';

function gameOver() {
    newGameContainer.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', () => {
        onClick = 0;
        roundCounter.textContent = '';
        whoWon.textContent = '';
        playerScore = 0;
        computerScore = 0;
        playerScoreCounter.textContent = playerScore;
        computerScoreCounter.textContent = computerScore;
    });
}

const whoWon = document.createElement('h3');

function winnerIs() {
    newGameContainer.appendChild(whoWon);
    if (computerScore === 5) {
        whoWon.textContent = 'Computer is the winner!';
    } else {
        whoWon.textContent = 'You are the winner!';
    }
}

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');

rockBtn.addEventListener('click', () => {
    playerChoice = 'rock';
    playRound();
    onClick++; 
});

paperBtn.addEventListener('click', () => {
    playerChoice = 'paper';
    playRound();
    onClick++;
});

scissorsBtn.addEventListener('click', () => {
    playerChoice = 'scissors';
    playRound();
    onClick++;
});

const displayPlayerChoice = document.querySelector('.player-choice');
const playerScoreCounter = document.querySelector('.player-score');

const displayComputerChoice = document.querySelector('.computer-choice');
const computerScoreCounter = document.querySelector('.computer-score');

//const round = document.querySelector('.round');
let roundCounter = document.querySelector('.round-counter');