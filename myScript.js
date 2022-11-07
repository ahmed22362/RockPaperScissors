let sign = 0
let playerChoice = 0
const myArray = ["Rock", "Paper", "Scissors"];



game()


function game() {
    let playerScore = 0
    let computerScore = 0
    let tie = 0
    for (let i = 0; i < 5; i++) {
        playerChoice = askForChoice()
        let result = playOneRound(playerChoice, getComputerChoice())
        if (result == "C") {
            computerScore++
        } else if (result == "T") {
            tie++
        }
        else {
            playerScore++
        }
    }

    if (computerScore > playerScore) {
        console.log(`Oh no! You lost.
        ${computerScore} beats ${playerScore} and ${tie} Ties.`)
    } else {
        console.log(`Lets go!!! You won.
        ${playerScore} beats ${computerScore} and ${tie} Ties.`)
    }
}

function playOneRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase()
    computerChoice = getComputerChoice().toLowerCase()
    console.log(`Your choice is ${playerChoice} and computer choice is ${computerChoice}`)
    if ((computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "scissors" && playerChoice == "paper") ||
        (computerChoice == "paper" && playerChoice == "rock")) {
        return "C"
    } else if (computerChoice == playerChoice) {
        return "T"
    } else {
        return "P"
    }
}

function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)]
}
function askForChoice() {
    do {
        sign = prompt("What's your Choice? =Rock, 2=paper, 3=Scissors");
    }
    while (sign > 3)

    return myArray[sign - 1]
}