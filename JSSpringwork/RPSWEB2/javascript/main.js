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

var player1handhtml = document.getElementById("player1hand");
var player2handhtml = document.getElementById("player2hand");

//Create Buttons

var rockButton = document.createElement("button");
rockButton.innerHTML = "Rock";

var scissorsButton = document.createElement("button");
scissorsButton.innerHTML = "Scissors";

var paperButton = document.createElement("button");
paperButton.innerHTML = "Paper";

//Declare player objects

var player1 = {

    name: 'John',
    handp1: 0,
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

function playRound() {

    const player1hand = hands[player1.handp1];
    const player2hand = player2.handp2;

    totalRounds++;

    if (player1hand === player2hand) {

        gameinfo.lastElementChild.firstElementChild.innerHTML = "It's a tie";

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

//This function creates the play buttons

function createPlayButtons() {

    if (buttonsMade === false) {

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

function updatePlayerData() {

    player2.handp2 = getHand();
    player1handhtml.innerHTML = "You picked " + hands[player1.handp1];
    player2handhtml.innerHTML = player2.name + " picked " + player2.handp2;
    playRound();
    gameinfo.firstElementChild.firstElementChild.nextElementSibling.innerHTML = "Score: " + player1.score;
    gameinfo.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = "Score: " + player2.score;
    document.getElementById("totalrounds").innerHTML = totalRounds + " rounds have been played.";
}

//Name player one

function playerOneName() {

    var x = document.getElementById("playeronename");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }
    if (text.length === 0) {
        player1.name = "John";
    } else {
        player1.name = text;
    }
}

function checkForWin(a, b) {

    if ((a === playUntil) || (b === playUntil)) {

        displayFinalGameData();
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

    playtext1.remove();
    
    gameinfo.firstElementChild.firstElementChild.innerHTML = "Player 1: " + player1.name;
    gameinfo.firstElementChild.firstElementChild.nextElementSibling.innerHTML = "Score: " + player1.score;
    gameinfo.firstElementChild.nextElementSibling.firstElementChild.innerHTML = "Player 2: " + player2.name;
    gameinfo.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = "Score: " + player2.score;

    document.getElementById("roundcountid").remove();
    document.getElementById("playeronename").remove();

    document.getElementById("roundsplayed").innerHTML = playUntil + " wins are being played to.";
    document.getElementById("totalrounds").innerHTML = totalRounds + " rounds have been played.";
    playbutton1.remove();
};


rockButton.onclick = () => {

    player1.handp1 = 0;
    updatePlayerData();
    checkForWin(player1.score, player2.score);
}

scissorsButton.onclick = () => {

    player1.handp1 = 2;
    updatePlayerData();
    checkForWin(player1.score, player2.score);
}

paperButton.onclick = () => {

    player1.handp1 = 1;
    updatePlayerData();
    checkForWin(player1.score, player2.score);
}


function displayFinalGameData() {

    playbutton1.innerHTML = "Play again?";

    rockButton.remove();
    scissorsButton.remove();
    paperButton.remove();

    if (player1.score === playUntil) {
        document.getElementById("winner").innerHTML = player1.name + "WINS";
    } else {

        document.getElementById("winner").innerHTML = player2.name + "WINS";
    }
    document.getElementById("totalrounds").innerHTML = totalRounds + " rounds were played in total.";
    document.getElementById("roundsplayed").innerHTML = playUntil + " wins were played to.";
}

