// var superHeroes = [

//     ["Batman", "Bruce Wayne"],
//     ["SpiderMan", "Peter Parker"],
//     ["The Flash", "Barry Allen"]
// ]

// var secretIdentity = superHeroes.map(function(revealArray){

//     return revealArray.join(" is ");
// });

// console.log(secretIdentity.join());

// const players = [
// 	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
// 	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
// 	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
// 	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
// 	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
// 	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
// 	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
// ];

// const playerMike = players.filter(function(player){

//     return player.firstName === "Mike";
// });

// console.log(playerMike);

// const playerRB = players.filter(function(player){

//     return player.position === "RB";
// });

// console.log(playerRB);

// const lastNames = players.map(function(player){

//     return player.lastName;
// });

// console.log(lastNames);

// const rbArray = playerRB.filter(function(player){

//     return player.touchdowns > 5;
// });

// console.log(rbArray.map(function(player){

//     return player.firstName + player.lastName;
// }));

// const totalRBTD = playerRB.reduce(function(sum, current){

//     return sum + current.touchdowns;
// }, 0);

// console.log(totalRBTD);