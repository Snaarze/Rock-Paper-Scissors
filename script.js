const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0 ;


buttons.forEach((button) => {
  
button.addEventListener('click', (e) =>{
        let playerChoice =  e.target.innerText;
       console.log(playRound(playerChoice));
     })
   
})

function ResetScore(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerHTML = `${playerScore}`;
    document.getElementById('computer-score').innerHTML = `${computerScore}`;
}


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


function playRound(playerChoice){


    let playerSelection = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    let result = "";


    if(playerScore >= 5 || computerScore >= 5){
        alert("Game is Over")
        return;
    } 

    if(playerSelection === 'rock'){
        if(computerChoice  === 'scissor'){
            result = "You win! Rock beat Scissor";
            playerScore++;
        }else if(computerChoice === 'paper'){
            result = "You lose ! Paper beat rock";
            computerScore++
        }else if(computerChoice === 'rock'){
            result = "Tie";
        }
    }else if(playerSelection === 'paper'){
        if(computerChoice === 'rock'){
            result = "You win! Paper beat Rock";
            playerScore++;
        }else if(computerChoice === 'scissor'){
            result = "You lose! Scissor beat Paper";
            computerScore++
        }else if(computerChoice === 'paper') {
            result = "Tie";
        }
    }else if(playerSelection === 'scissor'){
        if(computerChoice === 'paper'){
            result = "You win!  Scissor beat Paper";
            playerScore++;
        }else if(computerChoice === 'rock'){
            result = "You lose! Rock beat Scissor";
            computerScore++
        }else if(computerChoice === 'scissor'){
            result = "Tie";
        }
    };

    if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor"){
        document.getElementById("playerChoice").innerHTML = `${playerSelection}`;
        document.getElementById("computerChoice").innerHTML = `${computerChoice}`;
        document.getElementById("result").innerHTML = `${result}`;
        document.getElementById('player-score').innerHTML = `${playerScore}`;
        document.getElementById('computer-score').innerHTML = `${computerScore}`;
    }else {
        document.getElementById("playerChoice").innerHTML = "";
        document.getElementById("computerChoice").innerHTML = "";
        document.getElementById("result").innerHTML = "";
    };
}














