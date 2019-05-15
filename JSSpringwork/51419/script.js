//Array deconstruction

let myStr = "helloworld!";

arr = [...myStr].reverse('').join('');

const revers = myStr => myStr.split('').reverse('').join('');

console.log(revers);

console.log(arr);

let students = ["dksajldf","fdsajdf", "asdfhasd"];
let [x] = students;

console.log(x);

let[...rest] = students;
console.log(rest);

//classes

class Person {

    constructor (name, job) {

        this.name = name;
        this.job = job;
    }

    getName(){

        return this.name;
    }
    getJob() {

        return this.job;
    }
}

//classes and supers/extends

class Superhero extends Person {

    constructor (name, hero, superpower){

        super(name);
        this.hero = hero;
        this.superpower = superpower;
    }

    indentity(){

        return this.name + this.hero;
    }
}

let goodGuy = new Person('Jim Gordon', 'comissioner');
let batman = new Superhero('bruce wayne', 'batman', 'rich af');

console.log(batman);

console.log(goodGuy);

//creating objects with existing variables

let name = "shane";
let job = "developer";

let instructor = {name, job};

console.log(instructor);

//Maps

let nums = [3, 6, 9, 12];

let myfunc =  nums.map(() => 'cats');

console.log(myfunc);