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
            action.innerHTML = "invalid value generated: " + choice;
            return;
    }
}

// console.log(getComputerChoice());



// target the DIV node that will display results
const action = document.querySelector("#action");
const userScoreElement = document.querySelector("#userScore");
const compScoreElement = document.querySelector("#compScore");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        action.textContent = `Tie! You both chose ${humanChoice}`;
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        action.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        action.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Update scores in the DOM
    userScoreElement.textContent = humanScore;
    compScoreElement.textContent = computerScore;
}

// get a node list of our buttons
const buttons = document.querySelectorAll("button");

const btns = document.querySelector("#btns");

// use .forEach method to iterate through each one and add an event listener
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.innerHTML.trim(), getComputerChoice());

        if (humanScore === 5 || computerScore === 5) {
            btns.remove();
            if (humanScore > computerScore) {
                action.innerHTML = "You win the game!";
                return;
            } else {
                action.innerHTML = "You lose!";
                return;
            }
        };
    });
});

// function getHumanChoice() {
//     let humanChoice = prompt("enter: rock, paper or scissors");
//     humanChoice = humanChoice.toLowerCase();
//     if (!humanChoice || !(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
//         console.log("Failed to enter a proper choice");
//         return;
//     }
//     return humanChoice;
// }

// console.log(getHumanChoice());

// function playGame() {
//     for (i = 0; i < 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }

//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//         return;
//     } else {
//         console.log("You lose!")
//         return;
//     }
// }

// playGame();