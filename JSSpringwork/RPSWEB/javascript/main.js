var hands = ['rock', 'paper', 'scissors'];
var myelement = document.getElementById("greeting");

var p1element = document.getElementById("p1element");
var p2element = document.getElementById("p2element");

var startelement = document.getElementById("butt1");

var p1score = document.getElementById("p1score");
var p2score = document.getElementById("p2score");

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

function getHand(){

    return hands[Math.floor(Math.random() * hands.length)];
}

function getCustomHand(){

    document.getElementById("rock").onclick = function(){

        player1.handp1 = "rock";
        return player1.handp1;
      
    }
    document.getElementById("paper").onclick = function(){

        player1.handp1 = "paper";
        return player1.handp1;
      
    }
    document.getElementById("scissors").onclick = function(){

        player1.handp1 = "scissors";
        return player1.handp1;
      
    }
}

var player1 = {

    name: 'John',
    handp1: getHand(),
    score: 0,
}

var player2 = {

    name: 'Lennart',
    handp2: getHand(),
    score: 0,
}

function createPlayer(player){

    player1.name = prompt("What is your name?");
}

function playRound(player1, player2){

    const player1hand = getCustomHand();
    const player2hand = getHand();

    p1element.innerHTML = "Player 1: " + player1.name;
    p2element.innerHTML = "Player 2: " + player2.name;
    p1score.innerHTML = player1.name + "'s Score: " + player1.score;
    p2score.innerHTML = player2.name + "'s Score: " + player2.score;

    if(player1hand === player2hand){

        greeting.innerHTML= "It's a tie";

    } else if(winConditions[player1hand] === player2hand){
        greeting.innerHTML= player1.name + " Wins";
        player1.score = player1.score + 1;
        console.log(player1.score, player2.score);

    } else {
        greeting.innerHTML= player2.name + " Wins";
        player2.score = player2.score + 1;
        console.log(player1.score, player2.score);
    }
}

var playUntil = 5;

function playGame(player1, player2, playUntil){


    while((player1.score < playUntil) && (player2.score < playUntil)){
        playRound(player1, player2);
        
    }
}

createPlayer(player1);

document.getElementById("butt1").onclick = function(){

    playGame(player1, player2, playUntil);
}