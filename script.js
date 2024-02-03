
function getComputerChoice(){
    let randomNumber = Math.random() * 3
    let ComputerChoice = "";

    if(randomNumber >= 0 && randomNumber < 1){
        ComputerChoice = "rock";
    }else if(randomNumber > 1 && randomNumber < 2){
        ComputerChoice = "paper";
    }else if(randomNumber > 2 && randomNumber <= 3){
        ComputerChoice = "scissor"
    }
    return ComputerChoice;
}


function playRound(){


    let userInput = prompt("What's your Move? :", "");
    let playerSelection = userInput.toLowerCase();
    let computerChoice = getComputerChoice();
    let result = "";

    if(playerSelection === 'rock'){
        if(computerChoice  === 'scissor'){
            result = "You win! Rock beat Scissor";
        }else if(computerChoice === 'paper'){
            result = "You lose ! Paper beat rock";
        }else if(computerChoice === 'rock'){
            result = "Tie";
        }
    }else if(playerSelection === 'paper'){
        if(computerChoice === 'rock'){
            result = "You win! Paper beat Rock";
        }else if(computerChoice === 'scissor'){
            result = "You lose! Scissor beat Paper";
        }else if(computerChoice === 'paper') {
            result = "Tie";
        }
    }else if(playerSelection === 'scissor'){
        if(computerChoice === 'paper'){
            result = "You win!  Scissor beat Paper";
        }else if(computerChoice === 'rock'){
            result = "You lose! Rock beat Scissor";
        }else if(computerChoice === 'scissor'){
            result = "Tie";
        }
    }else {
        alert("Invalid Output : Please choose rock/paper/scissor ")
    }
    if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor"){
        document.getElementById("playerChoice").innerHTML = `${playerSelection}`;
        document.getElementById("computerChoice").innerHTML = `${computerChoice}`;
        document.getElementById("result").innerHTML = `${result}`;
    }else {
        document.getElementById("playerChoice").innerHTML = "";
        document.getElementById("computerChoice").innerHTML = "";
        document.getElementById("result").innerHTML = "";
    }
   
}











