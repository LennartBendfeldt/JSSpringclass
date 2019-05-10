var hands = ['rock', 'paper', 'scissors'];

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

function getHand(){

    return hands[Math.floor(Math.random() * hands.length)];
}

var player1 = {

    name: 'John',
    handp1: getHand(),
    score: 0,
}

var player2 = {

    name: 'Larry',
    handp2: getHand(),
    score: 0,
}

function playRound(player1, player2){

    const player1hand = getHand();
    const player2hand = getHand();

    if(player1hand === player2hand){

        console.log('Its a tie');

    } else if(winConditions[player1hand] === player2hand){
        gameinfo.lastElementChild.firstElementChild.innerHTML = "Player 1 wins!";
        player1.score = player1.score + 1;
        console.log(player1.score, player2.score);

    } else {
        gameinfo.lastElementChild.firstElementChild.innerHTML = "Player 2 wins!";
        player2.score = player2.score + 1;
        console.log(player1.score, player2.score);
    }
}

var playUntil = 5;

function playGame(player1, player2, playUntil){


    while((player1.score < playUntil) && (player2.score < playUntil)){

        
        playRound(player1, player2);
        
    };
};

var playbutton1 = document.getElementById('playbutton');
var playtext1 = document.getElementById('Play');
var gameinfo = document.getElementById('gameinfo');

playbutton1.onclick = function rungame(){

player1.score = 0;
player2.score = 0;

playbutton1.innerHTML = "Play again?";
playtext1.remove();

playGame(player1, player2, playUntil);
gameinfo.firstElementChild.firstElementChild.innerHTML = "Player 1: " + player1.name;
gameinfo.firstElementChild.firstElementChild.nextElementSibling.innerHTML = "Score: " + player1.score;
gameinfo.firstElementChild.nextElementSibling.firstElementChild.innerHTML = "Player 2: " + player2.name;
gameinfo.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = "Score: " + player2.score;
}


