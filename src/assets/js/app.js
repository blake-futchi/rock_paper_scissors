// storing reference points in DOM in variables

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const results_div = document.querySelector(".results");
const options_div = document.querySelector(".options");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// add event listeners for page interaction
// create main function to handle all events together at once
// define choice function - take value of buttons and compare against computer choice and bring back results

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices [randomNumber];
}

function choice(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      window.alert("USER WINS");
      break;
    case "rp":
    case "ps":
    case "sr":
      window.alert("USER LOSES");
      break;
    case "rr":
    case "pp":
    case "ss":
      window.alert("DRAW");
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
}
game()

console.log(userScore + " points for user");
console.log(computerScore + " points for computer");

console.log(userScore_span);
console.log(computerScore_span);

console.log(score_div);
console.log(results_div);
console.log(options_div);

console.log(rock_div);
console.log(paper_div);
console.log(scissors_div);