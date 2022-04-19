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

function playRound(userChoice) {
    let computerChoice = computerPlay();

    const resultDiv = document.querySelector(".results");
    
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

function game() {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

    let resultDiv = document.querySelector(".results");
    let scoreDiv = document.querySelector(".currScore");

    let results;
    let userScore = 0;
    let computerScore = 0;
    
    rockButton.addEventListener('click', () => {
        results = playRound("rock");
        resultDiv.textContent = results;
        if(results.includes("User")){
            userScore++;
        }
        else if(results.includes("Computer")){
            computerScore++;
        }
        scoreDiv.textContent = "Player Score: " + userScore + " Computer Score: " + computerScore;
    });
    paperButton.addEventListener('click', () => {
        results = playRound("paper");
        resultDiv.textContent = results;
        if(results.includes("User")){
            userScore++;
        }
        else if(results.includes("Computer")){
            computerScore++;
        }
        scoreDiv.textContent = "Player Score: " + userScore + " Computer Score: " + computerScore;
    });
    scissorsButton.addEventListener('click', () => {
        results = playRound("scissors");
        resultDiv.textContent = results;
        if(results.includes("User")){
            userScore++;
        }
        else if(results.includes("Computer")){
            computerScore++;
        }
        scoreDiv.textContent = "Player Score: " + userScore + " Computer Score: " + computerScore;
    });
}

game();
