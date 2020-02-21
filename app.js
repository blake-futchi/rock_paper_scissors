// storing reference points in DOM in variables

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const results_div = document.querySelector(".results");
const options_div = document.querySelector(".options");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div =document.getElementById("s");

// add event listeners for page interaction

rock_div.addEventListener('click', function() {
  console.log("rock was clicked")
});
paper_div.addEventListener('click', function() {
  console.log("paper was clicked")
});
scissors_div.addEventListener('click', function() {
  console.log("scissors was clicked")
});

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