function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let result = options[Math.floor(Math.random() * options.length)];
    return result
}

function playRound(playerSelection, computerSelection) {
    let selection = prompt('Please enter your selection');
    let playerScore = 0;
    let computerScore = 0;
    let result = "";

    playerSelection = selection.toLowerCase();
    computerSelection = computerPlay();

    console.log(playerScore)

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return "It's a draw!"
        } else if (computerSelection == 'paper') {
            computerScore+=1;
            return "You lose!"
        } else {
            playerScore+=1;
            return "You win!"
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return "It's a draw!"
        } else if (computerSelection == 'scissors') {
            computerScore+=1;
            return "Computer wins!"
        } else {
            playerScore+=1;
            return "You win!"
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return "It's a draw!"
        } else if (computerSelection == 'rock') {
            computerScore+=1;
            return "Computer wins!"
        } else {
            playerScore+=1;
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