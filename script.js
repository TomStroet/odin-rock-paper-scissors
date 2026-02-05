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


// 1. write function that returns computer choice: random pick of r/p/s.
// WHEN called, the function returns a random pick of r/p/s. The function has no input.

function getComputerChoice() {
    const randomPick = Math.random() * 3;
    if (randomPick < 1) {
        return 'rock'
    } else if (randomPick < 2) {
        return 'paper'
    } else return 'scissors'
}

console.log(getComputerChoice())