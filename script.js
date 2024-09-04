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
    if (!humanChoice || !(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"))
        return console.log("Failed to enter a proper choice");
    return humanChoice;
}

// console.log(getHumanChoice());