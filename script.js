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

function evaluateOutcome(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
        return 0
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' 
        || humanChoice == 'paper' && computerChoice == 'rock'
        || humanChoice == 'scissors' && computerChoice == 'paper') {
        return 1
    } else {
        return -1
    }
}

function logResult(result, humanChoice, computerChoice) {
    if (result == 1) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (result == -1) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    } else console.log('Draw!')
}

function updateScore(outcome, score) {
    if (outcome == 1) {
        score[0]++;
    } else if (outcome == -1) {
        score[1]++;
    }
    console.log(`Score - You: ${score[0]} - Computer: ${score[1]}`);
    return score
}

function playRound(score) {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    console.log(`You pick ${humanChoice}`)
    console.log(`Computer picks ${computerChoice}`)

    outcome = evaluateOutcome(humanChoice, computerChoice)
    logResult(outcome, humanChoice, computerChoice) 
    return updateScore(outcome, score)
}

function playGame(rounds = 5) {

    let score = Array(0, 0)
    let round = 1

    for (round; round <= rounds; round++) {
        console.log(`Round ${round}`)
        score = playRound(score)      
    }

    if (score[0] > score[1]) {
        console.log(`Game finished! You win! ${score[0]} against ${score[1]}`)
    } else if (score[0] < score[1]) {
        console.log(`Game finished! You lose! ${score[0]} against ${score[1]}`)
    } else {
        console.log(`Game finished! It's a draw! ${score[0]} against ${score[1]}`)
    }
}        

playGame()