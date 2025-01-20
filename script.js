const year = document.getElementById("year").textContent = new Date().getFullYear();

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0;
let computerScore =0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a Tie"
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "scissors") ? "You Win" : "You Lose";
               break
        }

        switch(playerChoice){
            case "paper":
               result = (computerChoice === "rock") ? "You Win" : "You Lose";
               break
        }

        switch(playerChoice){
            case "scissors":
               result = (computerChoice === "paper") ? "You Win" : "You Lose";
               break
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("green", "red");

    switch(result){
        case "You Win":
            resultDisplay.classList.add("green");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose":
            resultDisplay.classList.add("red");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}