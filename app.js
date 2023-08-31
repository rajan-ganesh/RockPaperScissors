const COMPUTER_WIN_MESSAGE = "Computer Wins!";
const USER_WIN_MESSAGE = "You Win!";
const TIE_MESSAGE = "Tie";
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("user_choice");
const resultDisplay = document.getElementById("result");

let selectedButton;
let generatedChoice;
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    selectedButton = e.target.id;
    userChoiceDisplay.innerHTML = selectedButton;
    console.log("user input recieved and displayed");
    generateRandom();
  })
);

function generateRandom() {
  let zerototwo = Math.floor(Math.random() * 3);
  switch (zerototwo) {
    case 1:
      generatedChoice = ROCK;
      break;

    case 2:
      generatedChoice = PAPER;
      break;

    case 0:
      generatedChoice = SCISSORS;
      break;
  }
  console.log("generated computer choice");
  computerChoiceDisplay.innerHTML = generatedChoice;

  calculateResult();
}

function calculateResult() {
  if (generatedChoice == selectedButton) {
    result = TIE_MESSAGE;
  } else if (selectedButton == ROCK) {
    if (generatedChoice == PAPER) {
      result = COMPUTER_WIN_MESSAGE;
    } else {
      result = USER_WIN_MESSAGE;
    }
  } else if (selectedButton == PAPER) {
    if (generatedChoice == SCISSORS) {
      result = COMPUTER_WIN_MESSAGE;
    } else {
      result = USER_WIN_MESSAGE;
    }
  } else if (selectedButton == SCISSORS) {
    if (generatedChoice == ROCK) {
      result = COMPUTER_WIN_MESSAGE;
    } else {
      result = USER_WIN_MESSAGE;
    }
  }
  
  resultDisplay.innerHTML = result;
  console.log("result generated");
}
