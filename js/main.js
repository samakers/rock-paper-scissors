let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let result = options[Math.floor(Math.random() * options.length)];
    return result
}

function playRound(playerSelection, computerSelection) {
    
    let selection = prompt('Please enter your selection');

    playerSelection = selection.toLowerCase();
    computerSelection = computerPlay();

    console.log("Player: " + playerScore + ", Computer: " + computerScore)

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            computerScore++;
            playerScore++;
            return "It's a draw, one point each!"
        } else if (computerSelection == 'paper') {
            computerScore++;
            return "You lose!"
        } else {
            playerScore++;
            return "You win!"
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            computerScore++;
            playerScore++;
            return "It's a draw, one point each!"
        } else if (computerSelection == 'scissors') {
            computerScore++;
            return "Computer wins!"
        } else {
            playerScore++;
            return "You win!"
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            computerScore++;
            playerScore++;
            return "It's a draw, one point each!"
        } else if (computerSelection == 'rock') {
            computerScore++;
            return "Computer wins!"
        } else {
            playerScore++;
            return "You win!"
        }
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        const result = playRound();
        console.log(result)
    }

}

game()