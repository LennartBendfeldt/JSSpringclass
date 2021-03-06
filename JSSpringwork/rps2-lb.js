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

    name: 'Lennart',
    handp1: getHand(),
    score: 0,
}

var player2 = {

    name: 'John',
    handp2: getHand(),
    score: 0,
}

function playRound(player1, player2){

    const player1hand = getHand();
    const player2hand = getHand();

    if(player1hand === player2hand){

        console.log('Its a tie');

    } else if(winConditions[player1hand] === player2hand){
        console.log('Player 1 wins');
        player1.score = player1.score + 1;
        console.log(player1.score, player2.score);

    } else {
        console.log('Player 2 wins!');
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

playGame(player1, player2, playUntil);