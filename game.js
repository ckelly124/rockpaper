let playSc=0;
let compSc=0;
//Function chooses Rock, Paper, or Scissors for the computer
function computerPlay(){
    const rps=["Mudkip","Rowlet", "Cyndaquil"]
    const compChoice= rps[Math.floor(Math.random()*3)];
    const compPoke=document.querySelector("#compPoke");
    removeAllChildNodes(compPoke);
    if(compChoice==="Mudkip"){
        const mudkip= document.createElement('img');
        mudkip.setAttribute('id','mudkip');
        mudkip.setAttribute('src','images/Mudkip/front.webp');
        compPoke.appendChild(mudkip);
    }
    else if(compChoice==="Rowlet"){
        const rowlet= document.createElement('img');
        rowlet.setAttribute('id','Rowlet');
        rowlet.setAttribute('src','images/Rowlet/front.webp');
        compPoke.appendChild(rowlet);
    }
    else if(compChoice==="Cyndaquil"){
        const cyndaquil= document.createElement('img');
        cyndaquil.setAttribute('id','cyndaquil');
        cyndaquil.setAttribute('src','images/Cyndaquil/front.webp');
        compPoke.appendChild(cyndaquil);
    }
    return compChoice;
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
        const compPoke=document.querySelector("#compPoke");
        removeAllChildNodes(compPoke);
        const rival= document.createElement('img');
        rival.setAttribute('id','rival');
        rival.setAttribute('src','images/rival.png');
        compPoke.appendChild(rival);
        endGame();
    }
    if(rival > 4){
        document.getElementById("textBox").textContent="Computer wins, better luck next time!";
        const compPoke=document.querySelector("#compPoke");
        removeAllChildNodes(compPoke);
        const rival= document.createElement('img');
        rival.setAttribute('id','rival');
        rival.setAttribute('src','images/rival.png');
        compPoke.appendChild(rival);
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
function playGame(){
    scores.textContent= `Player: ${playSc} Rival: ${compSc}`;
    textBox.textContent="Choose your starter to begin.";
    removeAllChildNodes(rpsButtons);
    removeAllChildNodes(compPoke);
    removeAllChildNodes(chosenPoke);

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
        const chosenPoke= document.querySelector('#chosenPoke');
        removeAllChildNodes(chosenPoke);
        const mudkip= document.createElement('img');
        mudkip.setAttribute('id','mudkip');
        mudkip.setAttribute('src','images/Mudkip/back.webp');
        chosenPoke.appendChild(mudkip);
    });
    paperButton.addEventListener('click', () => {
        round('Rowlet',computerPlay());
        const chosenPoke= document.querySelector('#chosenPoke');
        removeAllChildNodes(chosenPoke);
        const rowlet= document.createElement('img');
        rowlet.setAttribute('id','Rowlet');
        rowlet.setAttribute('src','images/Rowlet/back.webp');
        chosenPoke.appendChild(rowlet);
    });
    scissorsButton.addEventListener('click', () => {
        round('Cyndaquil',computerPlay());
        const chosenPoke= document.querySelector('#chosenPoke');
        removeAllChildNodes(chosenPoke);
        const cyndaquil= document.createElement('img');
        cyndaquil.setAttribute('id','cyndafront');
        cyndaquil.setAttribute('src','images/Cyndaquil/back.webp');
        chosenPoke.appendChild(cyndaquil);
    });

}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}