let playSc=0;
let compSc=0;
function computerPlay(){
    const rps=["Rock","Paper", "Scissors"]
    return rps[Math.floor(Math.random()*3)]
}
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
    console.log(`Player chose ${playerSelection}. Computer chose ${computerSelection}`);
    let play=playerSelection.toLowerCase();
    let comp=computerSelection.toLowerCase();
    const opt=["rock","paper", "scissors"];
    if(play===comp){
        console.log("It's a tie! Try again.");
        playerSelection=playerPrompt();
        return round(playerSelection, computerPlay())
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
    console.log("Let the battle begin.");
    let playerSelect=null;
    let compSelect=null;
    for(let i=1; i<6; i++){
        console.log(`Round ${ i }`);
        playerSelect= playerPrompt();
        compSelect= computerPlay();
        console.log(round(playerSelect,computerPlay()));
        console.log(`Current Score- Player: ${ playSc } Computer: ${ compSc }`);
    }
    console.log(`Final Score- Player: ${ playSc } Computer: ${ compSc }`);
    if(playSc>compSc){
        console.log("Congrats!")
    }
    else{
        console.log("Better Luck Next Time!");
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