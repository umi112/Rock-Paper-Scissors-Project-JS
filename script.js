let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score"); // Assuming you have an element for displaying user score
const computerScoreDisplay = document.querySelector("#comp-score"); // Assuming you have an element for displaying computer score



//user-Choice
const playGame = (userChoice) => {
    console.log("user-choice is:", userChoice);

    //computer-choice
    const compChoice = genCompChoice();
    console.log("computer-choice is:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false; // Change this to false initially

        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // User wins if compChoice is scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // User wins if compChoice is rock
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper"; // User wins if compChoice is paper
        }

        showWin(userWin);
    }
};

//Computer-Choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      console.log("choice was clicked", userChoice);
      playGame(userChoice);
  });
});



//draw game function
const drawGame = () => {
  console.log("draw game");
  msg.innerText = "Play again";
  msg.style.backgroundColor = "blue";
};

//Show Winner
const showWin = (userWin) => {
    if (userWin) {
        console.log("You win");
        userscore++; // Increment user score
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "Green";
        
    } else {
        console.log("You lose");
        compscore++; // Increment comp score
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "Red";
    }
     // Update the displayed scores
     userScoreDisplay.innerText = userscore;
     computerScoreDisplay.innerText = computerscore;
};


