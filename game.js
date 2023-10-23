let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resetButton = document.querySelector("#reset");
let points = document.querySelector("#points");
let playerPoints = document.querySelector("#player-points")
let computerPoints = document.querySelector("#computer-points")
let result = document.querySelector("#result");
let playerResult = document.querySelector("#player-result");
let computerResult = document.querySelector("#computer-result")
let message = document.querySelector("#message");
let playerScore = 0;
let computerScore = 0;


function game() {
    rockButton.addEventListener("click", () => {
        if (playerScore < 5 && computerScore < 5) {
            playRound("rock");
        }
        else {
            message.textContent =`That was fun! Here are the final results: 
            You: ${playerScore} - Computer: ${computerScore}`;
        }
    });

    paperButton.addEventListener("click", () => {
        if (playerScore < 5 && computerScore < 5) {
            playRound("paper");
        }
        else {
            message.textContent =`That was fun! Here are the final results: 
            You: ${playerScore} - Computer: ${computerScore}`;
        }
    });

    scissorsButton.addEventListener("click", () => {
        if (playerScore < 5 && computerScore < 5) {
            playRound("scissors");
        }
        else {
            message.textContent =`That was fun! Here are the final results: 
            You: ${playerScore} - Computer: ${computerScore}`;
        }
    });

    resetButton.addEventListener("click", () => {
        resetGame();
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore(playerScore, computerScore);
    updateResult(" ", " ");
    message.textContent = "Let's play again!";
}

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][index];
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        updateResult(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        message.textContent = "It's a draw! No one wins this round!";
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        updateResult(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        message.textContent = "Paper beats rock! You lose this round!";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        updateResult(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        message.textContent = "Rock beats scissors! You win this round!";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        updateResult(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        message.textContent = "Paper beats rock! You win this round!";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        updateResult(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        message.textContent = "Scissors beat paper! You lose this round!";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        updateResult(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        message.textContent = "Rock beats scissors! You lose this round!";
    }
    else {
        playerScore++;
        updateResult(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        message.textContent = "Scissors beat paper! You win this round!";
    }
}

function updateScore(plr, comp) {
    playerPoints.textContent = `Your Score: ${plr}`;
    computerPoints.textContent = `Computer Score: ${comp}`;
}

function updateResult(plr, comp) {
    playerResult.textContent = `Your Choice: ${plr}`;
    computerResult.textContent = `Computer Choice: ${comp}`
}

game();