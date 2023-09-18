console.log('hi');
const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('wrong input please write rock,paper or scissors');
    }
}
// console.log(getUserChoice('user turn' + userInput));

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else if (randomNumber === 2) {
        return 'scissors';
    }
}
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tied, try again';
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won';
        } else {
            return 'User won';
        }
    }

    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won';
        } else {
            return 'User won';
        }
    }

    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won';
        } else {
            return 'User won';
        }
    }
}

// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('paper', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();