let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const master_div = document.getElementById("m");
let results = document.getElementById("results");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices [randomNumber];
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
}

function lose() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
}

function draw() {

}
function choice(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    case "ms":
    case "mr":
    case "mp":
      win();
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}

function game() {
  rock_div.addEventListener('click', function() {
    choice("r");
  })
  paper_div.addEventListener('click', function() {
    choice("p");
  })
  scissors_div.addEventListener('click', function() {
    choice("s");
  })
  master_div.addEventListener('click', function() {
    choice("m");
  })
}
game()

