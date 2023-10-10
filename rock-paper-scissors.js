// Get user input and make sure it is lowercase
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

// Generate a random choice by computer
const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random()*3);
  if (randomChoice == 0) {
    return 'rock';
  } if (randomChoice == 1) {
    return 'paper';
  } if (randomChoice == 2) {
    return 'scissors';
  } else {
    return 'Error!';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == 'bomb') {
    return 'You win!';
  }
  if (userChoice == computerChoice) {
    return 'tie!'
  } if (userChoice == 'rock') {
      if (computerChoice == 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
        }
      }
  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
 if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
} 
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`);
  console.log(`The computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice)) ;
}
playGame();

