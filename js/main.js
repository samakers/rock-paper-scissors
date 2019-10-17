let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");
const score = document.getElementById("score");

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  let result = options[Math.floor(Math.random() * options.length)];
  return result;
}

function playRound() {
  let playerSelection;
  computerPlay();

  rock.addEventListener("click", function() {
    playerSelection == "rock";
    computerSelection = computerPlay();

    if (computerSelection == "rock") {
      computerScore++;
      playerScore++;

      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "Computer chose rock - it's a draw!";
    } else if (computerSelection == "paper") {
      computerScore++;
      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "Computer chose paper - you lose!";
    } else {
      playerScore++;
      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "Computer chose scissors - you win!";
    }
  });

  paper.addEventListener("click", function() {
    playerSelection == "paper";
    computerSelection = computerPlay();

    if (computerSelection == "paper") {
      computerScore++;
      playerScore++;

      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "Computer chose paper - it's a draw!";
    } else if (computerSelection == "scissors") {
      computerScore++;
      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "Computer chose scissors - you lose!";
    } else {
      playerScore++;
      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "Computer chose rock - you win!";
    }
  });

  scissors.addEventListener("click", function() {
    playerSelection == "scissors";
    computerSelection = computerPlay();

    if (computerSelection == "scissors") {
      computerScore++;
      playerScore++;

      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "It's a draw!";
    } else if (computerSelection == "rock") {
      computerScore++;
      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "You lose!!";
    } else {
      playerScore++;
      score.textContent = `Playerscore: ${playerScore} Computer Score: ${computerScore}`;
      results.textContent = "You win!";
    }
  });
}

playRound();

/*function game() {
  for (let i = 0; i < 5; i++) {
    const result = playRound();
    console.log(result);
  }
}

game();*/
