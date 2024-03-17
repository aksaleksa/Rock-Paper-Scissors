const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");
const playerWeapon = document.querySelector("#player-weapon");
const computerWeapon = document.querySelector("#computer-weapon");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");
let message = document.querySelector("#message");
let playerScore = 0;
let computerScore = 0;

// Once a choice is clicked, all buttons except reset are disabled until the round is over.

function game() {
    rockButton.addEventListener("click", () => {
        rockButton.setAttribute("disabled", true);
        paperButton.setAttribute("disabled", true);
        scissorsButton.setAttribute("disabled", true);

        if (playerScore < 5 && computerScore < 5) {
            playRound("rock");
            message.textContent = "Calculating..."

            if (playerScore === 5 || computerScore === 5) {
                setTimeout(() => {
                    message.textContent =`That was fun! Here are the final results: 
                    You: ${playerScore} - Computer: ${computerScore}`;
                }, 2500)
            }
        }
    });

    paperButton.addEventListener("click", () => {
        rockButton.setAttribute("disabled", true);
        paperButton.setAttribute("disabled", true);
        scissorsButton.setAttribute("disabled", true);

        if (playerScore < 5 && computerScore < 5) {
            playRound("paper");
            message.textContent = "Calculating..."

            if (playerScore === 5 || computerScore === 5) {
                setTimeout(() => {
                    message.textContent =`That was fun! Here are the final results: 
                    You: ${playerScore} - Computer: ${computerScore}`;
                }, 2500)
            }
        }
    });

    scissorsButton.addEventListener("click", () => {
        rockButton.setAttribute("disabled", true);
        paperButton.setAttribute("disabled", true);
        scissorsButton.setAttribute("disabled", true);

        if (playerScore < 5 && computerScore < 5) {
            playRound("scissors");
            message.textContent = "Calculating..."

            if (playerScore === 5 || computerScore === 5) {
                setTimeout(() => {
                    message.textContent =`That was fun! Here are the final results: 
                    You: ${playerScore} - Computer: ${computerScore}`;
                }, 2500)
            }
        }
    });

    resetButton.addEventListener("click", () => {
        resetGame();
    });
}

// Reset the game by setting both scores to 0 and removing all images ands scores.

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerWeapon.innerHTML = "";
    computerWeapon.innerHTML = "";
    playerPoints.innerHTML = "";
    computerPoints.innerHTML = "";
    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");
    message.textContent = "Let's play again!";
}

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][index];
}

// The use of setTimeout() gives the illusion of a delay from the computer.

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        setTimeout(() => {
            message.textContent = "It's a draw! No one wins this round!";
        }, 2000)
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        setTimeout(() => {
            message.textContent = "Paper beats rock! You lose this round!";
        }, 2000)
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        setTimeout(() => {
            message.textContent = "Rock beats scissors! You win this round!";
        }, 2000)
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        setTimeout(() => {
            message.textContent = "Paper beats rock! You win this round!";
        }, 2000)
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        setTimeout(() => {
            message.textContent = "Scissors beat paper! You lose this round!";
        }, 2000)
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        setTimeout(() => {
            message.textContent = "Rock beats scissors! You lose this round!";
        }, 2000)
    }
    else {
        playerScore++;
        setTimeout(() => {
            message.textContent = "Scissors beat paper! You win this round!";
        }, 2000)
    }

    // While the computer is "choosing", add the loading icon. Only when the computer has
    // chosen are the scores and computer's picture updated.

    computerWeapon.innerHTML = "";
    let loadingImage = document.createElement("img");
    loadingImage.src = `./photos/loading.png`;
    loadingImage.style.width = "100%";
    loadingImage.classList.add("loading");
    computerWeapon.appendChild(loadingImage);
    updateResult("player", playerChoice);
    setTimeout(() => {
        updateScore("player", playerScore);
        updateResult("computer", computerChoice);
        updateScore("computer", computerScore);
        rockButton.removeAttribute("disabled");
        paperButton.removeAttribute("disabled");
        scissorsButton.removeAttribute("disabled");
    }, 2000)
}

// Depending on the user's and computer's choices, link to different filepaths to display
// the correct weapon image

function updateResult(user, weapon) {
    if (user === "player") {
        playerWeapon.innerHTML = "";
        let playerImage = document.createElement("img");
        playerImage.src = `./photos/${weapon}.png`;
        playerImage.style.width = "100%";
        playerWeapon.appendChild(playerImage);
    }
    else {
        computerWeapon.innerHTML = "";
        let computerImage = document.createElement("img");
        computerImage.src = `./photos/${weapon}.png`;
        computerImage.style.width = "100%";
        computerWeapon.appendChild(computerImage);
    }
}

function updateScore(user, score) {
    if (user === "player") playerPoints.textContent = `${score}`;
    else computerPoints.textContent = `${score}`;
}

game();