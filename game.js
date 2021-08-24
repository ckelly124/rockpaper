let playSc=0;
let compSc=0;
//Function chooses Rock, Paper, or Scissors for the computer
function computerPlay(){
    const rps=["Mudkip","Rowlet", "Cyndaquil"]
    return rps[Math.floor(Math.random()*3)]
}
//Functions created to prompt for user input on choosing RPS each round. 
function playerPrompt(){
    let play= prompt("Rock, Paper, or Scissors?");
    if(play.toLowerCase()==="m" || play.toLowerCase()==="paper" || play.toLowerCase()==="scissors"){
        return play;
    }
    else{
        return playerPrompt();
    }
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

function round(playerSelection, computerSelection){
    changeText(`Player chose ${playerSelection}. Computer chose ${computerSelection}`);
    let play=playerSelection.toLowerCase();
    let comp=computerSelection.toLowerCase();
    const opt=["mudkip","rowlet", "cyndaquil"];
    if(play===comp){
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "It's a tie! Try again.";
    } else if (play===opt[0] && comp===opt[1]){
        compSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "Ha, you lose! Grass-type beats Water-type.";
    }
    else if (play===opt[1] && comp===opt[2]){
        compSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "Ha, you lose! Fire-type beats Grass-type.";
    } 
    else if (play===opt[2] && comp===opt[0]){
        compSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "Ha, you lose! Water-type beats Fire-type.";
    }
    else if (play===opt[0] && comp===opt[2]){
        playSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "You win! Water-type beats Fire-type.";
    }
    else if (play===opt[1] && comp===opt[0]){
        playSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "You win! Grass-type beats Water-type.";
    }
    else if (play===opt[2] && comp===opt[1]){
        playSc++;
        scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
        textBox.textContent= "You win! Fire-type beats Grass-type.";
    }
    checkScore(playSc,compSc);
}

const checkScore= function(player, rival){
    if(player > 4){
        document.getElementById("textBox").textContent="Congrats, you win!"
        endGame();
    }
    if(rival > 4){
        document.getElementById("textBox").textContent="Computer wins, better luck next time!";
        endGame();
    }
}
const endGame= function(){  
    scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
    playSc=0;
    compSc=0;

    const container= document.querySelector('#rpsButtons');
    removeAllChildNodes(container);
    const restartButton= document.createElement('button');
    restartButton.classList.add('button');
    restartButton.textContent="Click Here to Play Again";
    rpsButtons.appendChild(restartButton);
    restartButton.addEventListener('click', playGame); 
    return;
}
const changeText= function(text){
    document.getElementById("textBox").textContent=text;
}
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function playGame(){
    scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
    removeAllChildNodes(rpsButtons);

    const rockButton = document.createElement('button');
    rockButton.classList.add('button');
    rockButton.setAttribute('id','water');
    rockButton.textContent="Choose Mudkip!";
    rpsButtons.appendChild(rockButton);


    const paperButton = document.createElement('button');
    paperButton.classList.add('button');
    paperButton.setAttribute('id','grass');
    paperButton.textContent="Choose Rowlet!";
    rpsButtons.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.classList.add('button');
    scissorsButton.setAttribute('id','fire');
    scissorsButton.textContent="Choose Cyndaquil!";
    rpsButtons.appendChild(scissorsButton);

    

    rockButton.addEventListener('click', () => {
        round('Mudkip',computerPlay());
    });
    paperButton.addEventListener('click', () => {
        round('Rowlet',computerPlay());
    });
    scissorsButton.addEventListener('click', () => {
        round('Cyndaquil',computerPlay());
    });

}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}