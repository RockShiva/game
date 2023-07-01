const btn = document.getElementById("btn");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const userImg = document.getElementById('user-img')
const computerImg = document.getElementById('computer-img')
let input = document.querySelector("input");
let computerScoreValue = document.getElementById("computer-score");
let userScoreValue = document.getElementById("user-score");
let userChoiceValue = document.getElementById("user-choice");
let computerChoiceValue = document.getElementById('computer-choice');
let victory = document.getElementById("victory");
let userScore = 0, computerScore = 0, userChoice, computerChoice;

// computer choice
const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    return random;
}

// user choice
const getUserChoice = () => {
    let val = input.value;
    return parseInt(val);
}

// similar choice 
const similarChoice = (userChoice, computerChoice) => {
    victory.innerHTML = `<h1>Similar choice both of you</h1>`

    if (userChoice === 2 && computerChoice === 2) {
        userImg.innerHTML = `<img class="show" src="./img/scissor.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/scissor.png" />`;
        userChoiceValue.innerText = "Scissor"
        computerChoiceValue.innerText = "Scissor"
    } else if (userChoice === 1 && computerChoice === 1) {
        userImg.innerHTML = `<img class="show" src="./img/paper.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/paper.png" />`;
        userChoiceValue.innerText = "Paper"
        computerChoiceValue.innerText = "Paper"
    } else if (userChoice === 0 && computerChoice === 0) {
        userImg.innerHTML = `<img class="show" src="./img/rock.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/rock.png" />`;
        userChoiceValue.innerText = "Rock"
        computerChoiceValue.innerText = "Rock"
    }
}

// computer won
const userWon = () => {
    userScore = userScore + 10;
    computerScore = computerScore;
    userScoreValue.innerText = userScore;

    if (userChoice === 1 && computerChoice === 0) { // paper, rock = paper
        victory.innerHTML = `<h1>Paper defeated Rock</h1>`
        userImg.innerHTML = `<img class="show" src="./img/paper.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/rock.png" />`;
        userChoiceValue.innerText = "Paper"
        computerChoiceValue.innerText = "Rock"
    } else if (userChoice === 2 && computerChoice === 1) {  // scissor, paper = scissor
        victory.innerHTML = `<h1>Sciessor defeated Paper</h1>`
        userImg.innerHTML = `<img class="show" src="./img/scissor.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/paper.png" />`;
        userChoiceValue.innerText = "Scissor"
        computerChoiceValue.innerText = "Paper"
    } else if (userChoice === 0 && computerChoice === 2) {  // rock, scissor = rock
        victory.innerHTML = `<h1>Rock defeated Scissor</h1>`
        userImg.innerHTML = `<img class="show" src="./img/rock.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/scissor.png" />`;
        userChoiceValue.innerText = "Rock"
        computerChoiceValue.innerText = "Scissor"
    }
}

const computerWon = () => {
    computerScore = computerScore + 10;
    userScore = userScore;
    computerScoreValue.innerText = computerScore;

    if (userChoice === 0 && computerChoice === 1) { // rock, paper = paper
        victory.innerHTML = `<h1>Paper defeated Rock</h1>`
        userImg.innerHTML = `<img class="show" src="./img/rock.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/paper.png" />`;
        userChoiceValue.innerText = "Rock"
        computerChoiceValue.innerText = "Paper"
    } else if (userChoice === 1 && computerChoice === 2) {  // paper, scissor = scissor
        victory.innerHTML = `<h1>Scissor defeated Paper</h1>`
        userImg.innerHTML = `<img class="show" src="./img/paper.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/scissor.png" />`;
        userChoiceValue.innerText = "Paper"
        computerChoiceValue.innerText = "Scissor"
    } else if (userChoice === 2 && computerChoice === 0) {  // scissor, rock = rock
        victory.innerHTML = `<h1>Rock defeated Scissor</h1>`
        userImg.innerHTML = `<img class="show" src="./img/scissor.png" />`;
        computerImg.innerHTML = `<img class="show" src="./img/rock.png" />`;
        userChoiceValue.innerText = "Scissor"
        computerChoiceValue.innerText = "Rock"
    }
}

// getting blank value as by default
function getBlank() {
    userChoiceValue.innerText = ""
    computerChoiceValue.innerText = ""
    input.value = '';
    rock.innerText = ''
    paper.innerText = ''
    scissor.innerText = ''
    rock.classList.remove("show");
    paper.classList.remove("show");
    scissor.classList.remove("show");
}

// game window
const gameWin = (e) => {
    // e.preventDefault();

    // user choice
    userChoice = getUserChoice();

    // keep each value empty 
    getBlank();

    // computer choice
    computerChoice = getComputerChoice();

    // check conditions 
    if (userChoice === 0 && computerChoice === 1) {
        computerWon();
    } else if (userChoice === 1 && computerChoice === 2) {
        computerWon();
    } else if (userChoice === 2 && computerChoice === 0) {
        computerWon();
    } else if (userChoice === 1 && computerChoice === 0) {
        userWon();
    } else if (userChoice === 2 && computerChoice === 1) {
        userWon();
    } else if (userChoice === 0 && computerChoice === 2) {
        userWon();
    } else if (userChoice === computerChoice) {
        similarChoice(userChoice, computerChoice);
    } else {
        if (userChoice < 0 || computerChoice < 0 || userChoice > 2 || computerChoice > 2) {
            alert("Please Choose between 0-2");
            getBlank
        }
    }
}

btn.addEventListener("click", gameWin); 