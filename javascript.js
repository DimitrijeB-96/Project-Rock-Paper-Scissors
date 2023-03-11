const choices = ['rock', 'paper', 'scissors'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const roundCounter = document.querySelector('.round-counter');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const checkWinner = document.querySelector('.score-container');
const displayWinner = document.querySelector('.winner');

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    roundCounter.textContent = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;

    displayWinner.textContent = '';
});

function computerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const playerSelection = document.querySelectorAll('.btn');
playerSelection.forEach(btn => btn.addEventListener('click', (e) => {
    roundCounter.textContent++;
    const player = getPlayerChoice(e.target.id); 
    playRound(player, computerChoice());
    if ((playerScore.textContent == '5') || (computerScore.textContent == '5')) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}));

function getPlayerChoice(playerChoice) {
    let playerResult = playerChoice;

    if (playerResult === 'rock') {
        return 'rock';
    } else if (playerResult === 'paper') {
        return 'paper';
    } else if (playerResult === 'scissors') {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playRoundWinner;

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if(playerSelection === computerSelection) {
        playRoundWinner = 'tie'; //not used
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore.textContent++;
            playRoundWinner ='player';  //not used         
    } else {
            computerScore.textContent++;
            playRoundWinner = 'computer'; //not used
    }   
}

function gameOver(gameWinner) {
    displayWinner.textContent = `${gameWinner}`;
}

checkWinner.addEventListener('DOMSubtreeModified', () => {
    let gameWinner;

    if (playerScore.textContent == '5') {
        gameWinner = 'Player';
        gameOver(gameWinner);
    }else if (computerScore.textContent == '5') {
        gameWinner = 'Computer';
        gameOver(gameWinner);
    }
});





