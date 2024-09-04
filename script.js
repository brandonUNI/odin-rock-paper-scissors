let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 0:
            return "scissors";
        default:
            console.log("invalid value generated: ", choice);
            return;
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("enter: rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    if (!humanChoice || !(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        console.log("Failed to enter a proper choice");
        return;
    }
    return humanChoice;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors");
            return;
        } else if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
            return;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
            return;
        } else if (computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
            return;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper")
            return;
        } else if (computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors");
            return;
        }
    }
    
    console.log("Tie! Go Again");
    playRound(getHumanChoice(), getComputerChoice());
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
        return;
    } else {
        console.log("You lose!")
        return;
    }
}

playGame();