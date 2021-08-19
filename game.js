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
       return "It's a tie! Try again.";
    } else if (play===opt[0] && comp===opt[1]){
        compSc++;
        return "Ha, you lose! Paper beats Rock.";

    }
    else if (play===opt[1] && comp===opt[2]){
        compSc++;
        return "Ha, you lose! Scissors beats Paper.";
    } 
    else if (play===opt[2] && comp===opt[0]){
        compSc++;
        return "Ha, you lose! Rock beats Scissors.";
    }
    else if (play===opt[0] && comp===opt[2]){
        playSc++;
        return "You win! Rock beats Scissors.";
    }
    else if (play===opt[1] && comp===opt[0]){
        playSc++;
        return "You win! Paper beats Rock.";
    }
    else if (play===opt[2] && comp===opt[1]){
        playSc++;
        return "You win! Scissors beats Paper.";
    }
}
function game(){
    playSc=0;
    compSc=0;
    //alert("Let the battle begin.");
    changeText("Let the battle begin");
    let playerSelect=null;
    let compSelect=null;
    //for(let i=1; i<6; i++){
       // changeText(`Round ${ i }`);
        //alert(`Round ${ i }`);
    playerSelect= playerPrompt();
    compSelect= computerPlay();
    changeText(round(playerSelect,computerPlay())+`\n Current Score- Player: ${ playSc } Computer: ${ compSc }`);
        //alert(`Current Score- Player: ${ playSc } Computer: ${ compSc }`);
    //}
    changeText(`Final Score- Player: ${ playSc } Computer: ${ compSc }`);
    if(playSc>compSc){
        document.getElementById("textBox").textContent="Congrats!"
    }
    else{
        changeText("Better Luck Next Time!");
    }
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
const changeText= function(text){
    document.getElementById("textBox").textContent=text;
}
const textBox= document.querySelector('#textBox');
textBox.textContent ='Let the battle begin!';

const startButton= document.querySelector('#startButton');
startButton.addEventListener('click', game);

const rpsButtons = document.querySelector('#rpsButtons');

const rockButton = document.createElement('button');
rockButton.classList.add('button');
//rockButton.textContent="Choose Rock!";
rockButton.innerHTML = '<img src="images/Cyndaquil.png" />'
rpsButtons.appendChild(rockButton);


const paperButton = document.createElement('button');
paperButton.classList.add('button');
paperButton.textContent="Choose Paper!";
paperButton.innerHTML = '<img src="images/Mudkip.png" />'
rpsButtons.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.classList.add('button');
//scissorsButton.textContent="Choose Scissors!";
scissorsButton.innerHTML = '<img src="images/Rowlett.png" />'

rpsButtons.appendChild(scissorsButton);

rockButton.addEventListener('click', () => {
    textBox.textContent=round('rock',computerPlay());
});
paperButton.addEventListener('click', () => {
    textBox.textContent=round('paper',computerPlay());
});
scissorsButton.addEventListener('click', () => {
    textBox.textContent=round('scissors',computerPlay());
});
