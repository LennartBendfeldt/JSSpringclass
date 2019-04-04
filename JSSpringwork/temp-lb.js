var temp = 80;
var precipitation = false;
var indoors = false;

console.log("The temperature is " + temp);

if(indoors == true){
console.log("We are indoors");
}

if(((temp > 80) && precipitation == false) || (indoors == true)){

    console.log("Time to swim");
} else {

    console.log("No swim today");
}