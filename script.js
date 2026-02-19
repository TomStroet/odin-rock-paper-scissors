let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('#buttons button')
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(event.target.innerText);
    })
});


function playRound(humanChoice) {
    const computerChoice = getComputerChoice()

    let winner = ''
    if (humanChoice == computerChoice) {
        winner = 'draw'
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors' 
        || humanChoice == 'Paper' && computerChoice == 'Rock'
        || humanChoice == 'Scissors' && computerChoice == 'Paper') {
        winner = 'human';
        humanScore += 1; 
    } else {
        winner = 'computer';
        computerScore += 1;
    }

    showResult(humanChoice, computerChoice, winner)
    updateScoreboard()
    checkForWinner()
}


function getHumanChoice() {
    const choice = prompt('Enter your choice')
    return choice.toLowerCase()
}


function getComputerChoice() {
    const randomPick = Math.random() * 3;
    if (randomPick < 1) {
        return 'Rock'
    } else if (randomPick < 2) {
        return 'Paper'
    } else return 'Scissors'
}


function showResult(humanChoice, computerChoice, winner) {
    let resultMsg = ''
    if (winner == "human") {
        resultMsg = `You win! ${humanChoice} beats ${computerChoice}.`
    } else if (winner == "computer") {
        resultMsg = `You lose! ${computerChoice} beats ${humanChoice}.`
    } else resultMsg = 'Draw!'
    
    // const resultsDiv = document.querySelector(".results")
    const choices = document.querySelector('.choices')
    const result = document.querySelector('.result')
    choices.textContent = `You pick ${humanChoice}. Computer picks ${computerChoice}.`
    result.textContent = resultMsg
    // resultsDiv.appendChild(choices)
    // resultsDiv.appendChild(result)
}


function updateScoreboard() {
    const humanScoreLabel = document.querySelector(".humanScore")
    humanScoreLabel.textContent = humanScore
    const computerScoreLabel = document.querySelector(".computerScore")
    computerScoreLabel.textContent = computerScore
}


function checkForWinner() {
    const winnerMsg = document.createElement('h1')
    if (humanScore == 5) {
        winnerMsg.textContent = 'You win!'
        document.querySelector('.results').appendChild(winnerMsg)
    } else if (computerScore == 5) {
        winnerMsg.textContent = 'Computer wins!'
        document.querySelector('.results').appendChild(winnerMsg)
    }
}
