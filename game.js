// Rock paper scissors
// Have the user choose between three choices: rock, paper and scissors
// Have them type in their choice (not case sensitive) but don't worry about the interface
// Generate a random choice for the computer of either rock, paper or scissors
// Compare the computer's choice to that of the user
// Remember: Rock beats scissors, paper beats rock, scissors beat paper. Two of the same is a draw.
// According to the above rules, print out a statement with the result of that round
// Keep a count of the score and repeat the game for a total of 5 rounds
// At the end, print the final score
// Refactored version:
// Add buttons to make a simple interface plus event handlers
// Within the game() function, ensure that the game finishes once a user reaches 5 points
// Add a reset function so that the game can be wiped and restarted at any time

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resetButton = document.querySelector("#reset");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;


function game() {
    rockButton.addEventListener("click", () => {
        if (playerScore < 5 && computerScore < 5) {
            playRound("rock");
        }
        else {
            result.textContent =`That was fun! Here are the final results: 
            You: ${playerScore} - Computer: ${computerScore}`;
            return;
        }
    });

    paperButton.addEventListener("click", () => {
        if (playerScore < 5 && computerScore < 5) {
            playRound("paper");
        }
        else {
            result.textContent =`That was fun! Here are the final results: 
            You: ${playerScore} - Computer: ${computerScore}`;
            return;
        }
    });

    scissorsButton.addEventListener("click", () => {
        if (playerScore < 5 && computerScore < 5) {
            playRound("scissors");
        }
        else {
            result.textContent =`That was fun! Here are the final results: 
            You: ${playerScore} - Computer: ${computerScore}`;
            return;
        }
    });
}

function resetGame() {
    resetButton.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        result.textContent = "Let's play again!";
    });
}

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][index];
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        result.textContent =`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        It's a draw! No one wins this round!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        result.textContent = `Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Paper beats rock! You lose this round!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        result.textContent = `Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Rock beats scissors! You win this round!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        result.textContent = `Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Paper beats rock! You win this round!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        result.textContent = `Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Scissors beat paper! You lose this round!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        result.textContent = `Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Rock beats scissors! You lose this round!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else {
        playerScore++;
        result.textContent = `Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Scissors beat paper! You win this round!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
}

game();
resetGame();