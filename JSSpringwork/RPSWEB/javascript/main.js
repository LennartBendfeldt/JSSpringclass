//All possible hands

const hands = ['rock', 'paper', 'scissors'];

//Set win conditions by creating an object with 
//name:value pairs equal to desired win conditions; declare default values
//for number of rounds to play to and the number of rounds played.

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

var playUntil = 5;
var totalRounds = 0;
var buttonsMade = false;

//Declaring DOM variables for editing of the view

var playbutton1 = document.getElementById('playbutton');
var playtext1 = document.getElementById('Play');
var gameinfo = document.getElementById('gameinfo');
var roundcount = document.getElementById('roundcountid');
var roundcountbutton1 = document.getElementById('roundcountbutton');
var playButtonDiv = document.getElementById("optionbuttons");

//Declare player objects

var player1 = {

    name: 'John',
    handp1: getHand(),
    score: 0,
};

var player2 = {

    name: 'Larry',
    handp2: getHand(),
    score: 0,
};

//Create random hands out of the options in the hands array

function getHand() {

    return hands[Math.floor(Math.random() * hands.length)];
};

//Function the plays the round and takes players as parameters

function playRound(player1, player2) {

    const player1hand = getHand();
    const player2hand = getHand();

    totalRounds++;

    if (player1hand === player2hand) {

        console.log('Its a tie');

    } else if (winConditions[player1hand] === player2hand) {
        gameinfo.lastElementChild.firstElementChild.innerHTML = "Player 1 wins!";
        player1.score = player1.score + 1;
        console.log(player1.score, player2.score);

    } else {
        gameinfo.lastElementChild.firstElementChild.innerHTML = "Player 2 wins!";
        player2.score = player2.score + 1;
        console.log(player1.score, player2.score);
    };
};

//Use the players and playUntil as parameters to run a full game to the 
//specified amount of rounds.

function playGame(player1, player2, playUntil) {


    while ((player1.score < playUntil) && (player2.score < playUntil)) {


        playRound(player1, player2);

    };
};

//This function creates the play buttons

function createPlayButtons() {

    if (buttonsMade === false) {
        var rockButton = document.createElement("button");
        rockButton.innerHTML = "Rock";

        var scissorsButton = document.createElement("button");
        scissorsButton.innerHTML = "Scissors";

        var paperButton = document.createElement("button");
        paperButton.innerHTML = "Paper";

        playButtonDiv.appendChild(rockButton);
        playButtonDiv.appendChild(paperButton);
        playButtonDiv.appendChild(scissorsButton);

        buttonsMade = true;
    }; 
    
};

//This function takes input from an HTML form to determine the number of wins to play to.

function roundCountFunction() {
    var x = document.getElementById("roundcountid");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }
    if ((Number(text) > 0) && (Number(text) < 99)) {

        playUntil = text;
    } else {

        playUntil = 5;
        text = 5;
    }
    
};

//Name player one

function playerOneName(){

    var x = document.getElementById("playeronename");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }
    if(text.length === 0){
        player1.name = "John";
    } else {
    player1.name = text;
    }
}

//Javascript to run the game and change the DOM on a click of the play button

playbutton1.onclick = function rungame() {

    player1.score = 0;
    player2.score = 0;
    playerOneName();
    totalRounds = 0;

    roundCountFunction();
    createPlayButtons();

    playbutton1.innerHTML = "Play again?";
    playtext1.remove();

    playGame(player1, player2, playUntil);
    gameinfo.firstElementChild.firstElementChild.innerHTML = "Player 1: " + player1.name;
    gameinfo.firstElementChild.firstElementChild.nextElementSibling.innerHTML = "Score: " + player1.score;
    gameinfo.firstElementChild.nextElementSibling.firstElementChild.innerHTML = "Player 2: " + player2.name;
    gameinfo.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = "Score: " + player2.score;

    document.getElementById("totalrounds").innerHTML = totalRounds + " rounds were played in total.";
    document.getElementById("roundsplayed").innerHTML = playUntil + " wins were played to.";
};