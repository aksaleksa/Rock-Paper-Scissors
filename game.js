// Rock paper scissors
// Have the user choose between three choices: rock, paper and scissors
// Have them type in their choice (not case sensitive) but don't worry about the interface
// Generate a random choice for the computer of either rock, paper or scissors
// Compare the computer's choice to that of the user
// Remember: Rock beats scissors, paper beats rock, scissors beat paper. Two of the same is a draw.
// According to the above rules, print out a statement with the result of that round
// Keep a count of the score and repeat the game for a total of 5 rounds
// At the end, print the final score


function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][index];
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, paper or scissors: What do you choose?").toLowerCase();
    let winner = "";

    if (playerChoice === computerChoice) {
        console.log(`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        It's a draw! No one wins this round!`);
        winner = "none";
        return winner;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log(`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Paper beats rock! You lose this round!`);
        winner = "computer";
        return winner;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log(`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Rock beats scissors! You win this round!`);
        winner = "player";
        return winner;
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log(`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Paper beats rock! You win this round!`);
        winner = "player";
        return winner;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log(`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Scissors beat paper! You lose this round!`);
        winner = "computer";
        return winner;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log(`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Rock beats scissors! You lose this round!`);
        winner = "computer";
        return winner;
    }
    else {
        console.log(`Your choice: ${playerChoice}, Computer's choice: ${computerChoice}.
        Scissors beat paper! You win this round!`);
        winner = "player";
        return winner;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = "";
    while (playerScore + computerScore < 5) {
        result = playRound();
        if (result === "player") {
            playerScore++;
        }
        else if (result === "computer") {
            computerScore++;
        }
        else {
            continue;
        }
    }
    console.log(`That was fun! Here are the final results: 
    You: ${playerScore} - Computer: ${computerScore}`);
}

game();