/*
Goal: play rock paper scissors against a computer in the js console.

Game procedure:
1. Initialize game
2. Play a round
3. Get the computer choice
4. Get the user choice
5. Evaluate choices and determine winner
6. Update the score
7. Repeat step 2 through 6
8. Stop after x rounds and declare winner.

Steps
1. write function that returns computer choice: random pick of r/p/s.
2. Write function that prompts user for choice and return the choice
3. write function that plays a round, using a computer choice and user choice
4. update score using the outcome of the round.
5. Write function that plays multiple rounds.
6. Write function that stops the game and declares a winner.

*/

function getComputerChoice() {
    const randomPick = Math.random() * 3;
    if (randomPick < 1) {
        return 'rock'
    } else if (randomPick < 2) {
        return 'paper'
    } else return 'scissors'
}

function getHumanChoice() {
    const choice = prompt('Enter your choice')
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    console.log(`You pick ${humanChoice}`)
    console.log(`Computer picks ${computerChoice}`)

    let result
    if (humanChoice == computerChoice) {
        result = 0
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' 
        || humanChoice == 'paper' && computerChoice == 'rock'
        || humanChoice == 'scissors' && computerChoice == 'paper') {
        result = 1
    } else {
        result = -1
    }

    logResult(result)
    updateScore(result)
}

function updateScore(result) {
    if (result == 1) {
        humanScore++;
    } else if (result == -1) {
        computerScore++;
    }
    console.log(`Score - You: ${humanScore} - Computer: ${computerScore}`);
}

function logResult(result) {
    if (result == 1) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (result == -1) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    } else console.log('Draw!')
}

let humanScore = 0, computerScore = 0

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()
playRound(humanChoice, computerChoice)
