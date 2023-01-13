// Scissors > Paper
// Paper > Rock
// Rock > Scissors

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLowerCase = choice.toLowerCase();
        if (options.includes(choiceInLowerCase)) {
            validatedInput = true;
            return choiceInLowerCase;
        }
    }
}

function winner(playerSelection, computerSelection) {
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
    const result = winner(playerSelection, computerSelection);
    if (result == "tie") {
        return "Tie!";
    }
    else if (result == "player") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (result == "computer") {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        if(winner(playerSelection, computerSelection) == "player") {
            playerScore++;
        }
        else if(winner(playerSelection, computerSelection) == "computer") {
            computerScore++;
        }
    }

    console.log("\n");
    if (playerScore > computerScore) {
        console.log(`Congratulations, you won! you scored ${playerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`You lost! you only won ${playerScore}`);
    }
    else {
        console.log("It's a Tie!");
    }
}


//calling function to start the game
game();