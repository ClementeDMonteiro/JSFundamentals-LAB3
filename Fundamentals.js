//funmenltals
//exercise 1

console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(!true) // false
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log("  -9  " + 5) //   -9  5
console.log("  -9  " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(" \t \n" - 2) // -2


//exercise 2

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = Number(three) + Number(four);
let multiplication = three * four
let division = three / four
let subtraction = Number(three) - Number(four)
let lessThan1 = three < four
let lessThan2 = thirty < four


//exercise 3

// Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')  // 0 is considered false for java, so no print here
if ("0") console.log('#2 zero is true') // print
if (null) console.log('null is true')  // null also considered false, so it doesnt print
if (-1) console.log('negative is true')  // print
if (1) console.log('positive is true')  // print

//exercise 4

let a = 4, b = 5;
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10' : 'greater than 10';
console.log (result)
// concatenate strings

//exercise 5
// funtction expression syntax
const getGreeting = function(name){
    return 'Hello' + name + '!';
};
console.log(getGreeting('alice'));

//arrow function syntax
const getGreetings = name => 'Hello' + name + '!';
console.log(getGreetings('clemente'));

// exercie 6

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Roronoa',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lasttName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        if (person.numFingers === 6) {
            return 'Hi Roronoa, Monkey D'
        }   else{
            return 'Nice to meet you.';
        }
    }
}
    inigo.greeting(westley);
    inigo.greeting(rugen);

    // exercise 7

    const basketballGame = {
        score: 0,
        fouls: 0,
        freeThrow() {
            this.score++;
            return this;
        },
        basket() {
            this.score += 2;
            return this;
        },
        threePointer() {
            this.score += 3;
            return this;
        },
        foul(){
            this.fouls++;
            return this;
        },
        halfTime() {
            console.log('Halftime score is '+ this.score + 'fouls:' + this.fouls);
            return this;
        },
        fullTime() {
            console.log('full time final score is' + this.score + 'fouls' + this.fouls);
            return this;
        }
        }
        //modify each of the above object methods to enable function chaining as below:
        basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime().fullTime();
        basketballGame.foul().foul().basket().freeThrow().halfTime().fullTime();

        // exercise 8
        
function printObjectProperties(obj){
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

const sydney = {
    name:'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

const recife = {
    name: 'Recife',
    populaltion: 10_000_000,
    state: 'Pernambuco',
    founded: '12 March 1537',
    timezone: 'Brazil/Brasilia∑'
}
console.log('Sydney properties');
printObjectProperties(sydney);

console.log('Recife properties')
printObjectProperties(recife);

// exercise 9

let teamSports = ['Hokey', 'Cricket', 'Volleyball']
let dog1 = 'Bingo';
let cat1 = {name: 'Fluffy', breed: 'Siberian'};
let moreSports = teamSports;
let dog2 = dog1;
let cat2 = cat1
cat2.name = 'Pinga';
dog2 = 'menino';

moreSports.push('Soccer');
moreSports.unshift('Judo');

console.log(moreSports);
console.log(dog1);
console.log(cat1);


// exercie 10

class PersonClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.human = true;
    }
    
    canDrive(){
        return this.age >= 18;
    }
}
const person1 = PersonClass('Luffy', 20);
const person2 = new PersonClass('Zoro' + 24);
const person3 = new PersonClass('Sanji' + 30);
console.log('Person 1 can drive:', person1.canDrive());
console.log('Person 2 can drive:', person2.canDrive());
console.log('Person 3 can drive', person3.canDrive());