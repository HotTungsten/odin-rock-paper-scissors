function computerPlay() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(computerChoice, userChoice) {
    computerChoice = computerPlay();
    userChoice = prompt("Enter rock, paper, or scissors");

    //scrub user input
    userChoice = userChoice.toLowerCase();

    if(userChoice === computerChoice){
        return "Draw!";
    }
    else if(userChoice === "scissors" && computerChoice === "rock"){
        return "Computer wins! rock beats scissors";
    }
    else if(userChoice === "scissors" && computerChoice === "paper"){
        return "User wins! scissors beats paper";
    }
    else if(userChoice === "paper" && computerChoice === "rock"){
        return "User wins! paper beats rock";
    }
    else if(userChoice === "paper" && computerChoice === "scissors"){
        return "Computer wins! scissors beats paper";
    }
    else if(userChoice === "rock" && computerChoice === "paper"){
        return "Computer wins! rock beats paper";
    }
    else if(userChoice === "rock" && computerChoice === "scissors"){
        return "User wins! rock beats scissors";
    }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resultDiv = document.querySelector(".results");

rockButton.addEventListener('click', () => {
    resultDiv.textContent = "rock";
});
paperButton.addEventListener('click', () => {
    resultDiv.textContent = "paper";
});
scissorsButton.addEventListener('click', () => {
    resultDiv.textContent = "scissors";
});
