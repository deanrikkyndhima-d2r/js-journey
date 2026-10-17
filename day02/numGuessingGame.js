const prompt = require("prompt-sync")();

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7;

while (attempts > 0) {
    console.log(`Attempts left: ${attempts}`);

    let guess = Number(prompt("Guess a number (1-100): "));

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Invalid input! Please enter a number from 1 to 100.");
        continue;
    }

    attempts--;

    if (guess === secretNumber) {
        console.log("Correct! You win!");
        break;
    } else if (guess > secretNumber) {
        console.log("Too high!");
    } else {
        console.log("Too low!");
    }
}

if (attempts === 0) {
    console.log(`Game Over! The number was ${secretNumber}.`);
}