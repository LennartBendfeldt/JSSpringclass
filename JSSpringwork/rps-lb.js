var weapons = ['rock' , 'paper', 'scissors'];

var pOneScore = 0;
var pTwoScore = 0;

while((pOneScore || pTwoScore) < 3){

    var pOneWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    var pTwoWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];

    if(pOneWeaponOfChoice == pTwoWeaponOfChoice){

        console.log("It's a tie!");
        console.log("Player One:" + pOneScore + "Player Two: " + pTwoScore);
        continue;
    }

    else if((pOneWeaponOfChoice == 'rock' && pTwoWeaponOfChoice == 'scissors') || (pOneWeaponOfChoice == 'scissors' && pTwoWeaponOfChoice == 'paper') || (pOneWeaponOfChoice == 'paper' && pTwoWeaponOfChoice == 'rock')){

        console.log("Player 1 wins!");
        pOneScore = pOneScore + 1;
        console.log("Player One:" + pOneScore + "Player Two: " + pTwoScore);
        continue;
    } else {

        console.log("Player 2 Wins!");
        pTwoScore = pTwoScore + 1;
        console.log("Player One:" + pOneScore + "Player Two: " + pTwoScore);
        continue;
    }
}
