const choices = ['rock', 'paper', 'scissors'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const roundCounter = document.querySelector('.round-counter');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const roundWinner = document.querySelector('.round-winner');

const checkWinner = document.querySelector('.score-container');
const continuePlayingMessage = document.querySelector('.continue-playing');
const displayWinner = document.querySelector('.winner');


const displayPlayerChoice = document.querySelector('.player-choice');
const displayComputerChoice = document.querySelector('.computer-choice');


const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    rock.disabled = false;
    rock.style.backgroundColor = '#111';
    rock.style.cursor = 'pointer';

    paper.disabled = false;
    paper.style.backgroundColor = '#111';
    paper.style.cursor = 'pointer';

    scissors.disabled = false;
    scissors.style.backgroundColor = '#111';
    scissors.style.cursor = 'pointer';

    roundCounter.textContent = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;

    displayPlayerChoice.textContent = '';
    displayComputerChoice.textContent = '';
    roundWinner.textContent = '';

    continuePlayingMessage.textContent = '';
    displayWinner.textContent = '';

});

function computerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    displayComputerChoice.textContent = ` ${choices[random]}`;
    return choices[random];
}

const playerSelection = document.querySelectorAll('.btn');
playerSelection.forEach(btn => btn.addEventListener('click', (e) => {
    roundCounter.textContent++;
    const player = getPlayerChoice(e.target.id); 
    playRound(player, computerChoice());
    if ((playerScore.textContent == '5') || (computerScore.textContent == '5')) {
        rock.disabled = true;
        rock.style.backgroundColor = 'gray';
        rock.style.cursor = 'unset';

        paper.disabled = true;
        paper.style.backgroundColor = 'gray';
        paper.style.cursor = 'unset';

        scissors.disabled = true;
        scissors.style.backgroundColor = 'gray';
        scissors.style.cursor = 'unset';
    }
}));

function getPlayerChoice(playerChoice) {
    let playerResult = playerChoice;
    displayPlayerChoice.textContent = ` ${playerResult}`;

    if (playerResult === 'rock') {
        return 'rock';
    } else if (playerResult === 'paper') {
        return 'paper';
    } else if (playerResult === 'scissors') {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playRoundWinner = roundWinner;

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if(playerSelection === computerSelection) {
        playRoundWinner.textContent = "It's a tie!";
        playRoundWinner.style.color = 'purple';
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore.textContent++;
            playRoundWinner.textContent = "You won this round"; 
            playRoundWinner.style.color = 'green';          
    } else {
            computerScore.textContent++;
            playRoundWinner.textContent = "Computer won this round";
            playRoundWinner.style.color = 'red';
    }   
}

function gameOver(gameWinner) {
    continuePlayingMessage.textContent = 'Click Reset button to play again.'; 
    if (gameWinner == 'Player') {
        displayWinner.textContent = 'Congratulations you are the winner!';
        displayWinner.style.color = 'green';
    } else {
        displayWinner.textContent = 'Better luck next time, Computer won this match.';
        displayWinner.style.color = 'red';
    }
     
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





