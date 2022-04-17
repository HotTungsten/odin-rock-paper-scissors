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
    if(userChoice === computerChoice){
        return "Draw!";
    }
    else if(userChoice === "scissors" && computerChoice === "rock"){
        return "Computer wins!";
    }
    else if(userChoice === "scissors" && computerChoice === "paper"){
        return "User wins!"
    }
    else if(userChoice === "paper" && computerChoice === "rock"){
        return "User wins!"
    }
    else if(userChoice === "paper" && computerChoice === "scissors"){
        return "Computer wins!"
    }
    else if(userChoice === "rock" && computerChoice === "paper"){
        return "Computer wins!"
    }
    else if(userChoice === "rock" && computerChoice === "scissors"){
        return "User wins!"
    }
}

let computerChoice = computerPlay();
let userChoice = prompt("Enter rock, paper, or scissors");

//scrub user input
userChoice = userChoice.toLowerCase();

console.log(playRound(computerChoice, userChoice));