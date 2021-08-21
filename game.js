let playSc=0;
let compSc=0;
//Function chooses Rock, Paper, or Scissors for the computer
function computerPlay(){
    const rps=["Rock","Paper", "Scissors"]
    return rps[Math.floor(Math.random()*3)]
}
//Functions created to prompt for user input on choosing RPS each round. 
function playerPrompt(){
    let play= prompt("Rock, Paper, or Scissors?");
    if(play.toLowerCase()==="rock" || play.toLowerCase()==="paper" || play.toLowerCase()==="scissors"){
        return play;
    }
    else{
        return playerPrompt();
    }
}
function round(playerSelection, computerSelection){
    changeText(`Player chose ${playerSelection}. Computer chose ${computerSelection}`);
    let play=playerSelection.toLowerCase();
    let comp=computerSelection.toLowerCase();
    const opt=["rock","paper", "scissors"];
    if(play===comp){
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "It's a tie! Try again.";
    } else if (play===opt[0] && comp===opt[1]){
        compSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "Ha, you lose! Paper beats Rock.";
    }
    else if (play===opt[1] && comp===opt[2]){
        compSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "Ha, you lose! Scissors beats Paper.";
    } 
    else if (play===opt[2] && comp===opt[0]){
        compSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "Ha, you lose! Rock beats Scissors.";
    }
    else if (play===opt[0] && comp===opt[2]){
        playSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "You win! Rock beats Scissors.";
    }
    else if (play===opt[1] && comp===opt[0]){
        playSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "You win! Paper beats Rock.";
    }
    else if (play===opt[2] && comp===opt[1]){
        playSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "You win! Scissors beats Paper.";
    }
    checkScore(playSc,compSc);
}
function comPlayTest(){
    let rockCount=0;
    let paperCount=0;
    let scissorCount=0;
    for(let i=0; i<100; i++){
        let test=computerPlay()
        switch(test){
            case "Rock":
                rockCount++;
                break;
            case "Paper":
                paperCount++;
                break;
            case "Scissors":
                scissorCount++;
                break;
        }
    }
    let result= `Results:
     Rock: ${ rockCount } Paper: ${ paperCount }
     Scissor: ${ scissorCount}`
    return result;
}

const checkScore= function(player, rival){
    if(player > 4){
        document.getElementById("textBox").textContent="Congrats, you win!"
        endGame();
    }
    if(rival > 4){
        document.getElementById("textBox").textContent="Compuer wins, better luck next time!";
        endGame();
    }
}
const endGame= function(){  
    scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
    playSc=0;
    compSc=0;
    
    const paperButton= document.getElementById('paperButton');
    const rockButton= document.getElementById('rockButton');
    const scissorsButton= document.getElementById('scissorsButton');

    console.log(rpsButtons.childNodes);

    paperButton.remove();
    rockButton.remove();
    scissorsButton.remove();
    const restartButton= document.createElement('button');
    restartButton.classList.add('button');
    restartButton.textContent="Click Here to Play Again";
    rpsButtons.appendChild(restartButton);
    restartButton.addEventListener('click', playGame); 
    alert("test");
    return;
}
const changeText= function(text){
    document.getElementById("textBox").textContent=text;
}
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
const textBox= document.querySelector('#textBox');
textBox.textContent ='Let the battle begin!';

const scores= document.querySelector('#scores');
scores.textContent= `Player: ${playSc} Rival: ${compSc}`;

//startButton.addEventListener('click', game);

const rpsButtons = document.querySelector('#rpsButtons');

const startButton= document.createElement('button');
startButton.classList.add('button');
startButton.textContent="Click Here to Play";
rpsButtons.appendChild(startButton);
startButton.addEventListener('click', playGame);

function playGame(){
    scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
    rpsButtons.removeChild(startButton);
    const paperButton = document.createElement('button');
    paperButton.classList.add('paperButton');
    paperButton.textContent="Choose Paper!";
    //paperButton.innerHTML = '<img src="images/Mudkip.png" />'
    rpsButtons.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.classList.add('scissorsButton');
    scissorsButton.textContent="Choose Scissors!";
    //scissorsButton.innerHTML = '<img src="images/Rowlett.png" />'
    rpsButtons.appendChild(scissorsButton);

    const rockButton = document.createElement('button');
    rockButton.classList.add('rockButton');
    rockButton.textContent="Choose Rock!";
    //rockButton.innerHTML = '<img src="images/Cyndaquil.png" />'
    rpsButtons.appendChild(rockButton);

    rockButton.addEventListener('click', () => {
        round('rock',computerPlay());
    });
    paperButton.addEventListener('click', () => {
        round('paper',computerPlay());
    });
    scissorsButton.addEventListener('click', () => {
        round('scissors',computerPlay());
    });

}
