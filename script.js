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

}

let computerChoice = computerPlay();
let userChoice = prompt("Enter rock, paper, or scissors");

//scrub user input
userChoice = userChoice.toLowerCase();

console.log(playRound(computerChoice, userChoice));