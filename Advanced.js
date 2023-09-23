//Exercise 1
function makeCounter() {
    let currentCount = 0;
    return function() {
      currentCount+= incrementBy;
      console.log(currentCount);
      return currentCount;
    };
  }
  
  // Create the first counter, counter1 nd incremeting by 2
  let counter1 = makeCounter(1, 2);
  counter1(); 
  counter1(); 
  
  // Create the second counter, counter2 starting from 10 and incremeting by 3
  let counter2 = makeCounter(10, 3);
  counter2();
  counter2();
  
  // Test counter1 again - starting from 5 and incremeting by 1
  counter1(5, 1); 
  counter1();

  //Exercise 2
/*#4: Not delayed at all
#3: Delayed by 0ms
#2: Delayed by 20ms
#1: Delayed by 100ms*/
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};
const timeout1 = setTimeout(() => delayMsg('#1: Delayed by 100ms'), 100);
const timeout2 = setTimeout(() => delayMsg('#2: Delayed by 20ms'), 20);
const timeout3 = setTimeout(() => delayMsg('#3: Delayed by 0ms'), 0);
const timeout4 = delayMsg('#4: Not delayed at all');
const timeout5 = setTimeout(() => delayMsg('#5: Delayed by 15 seconds'), 15000); 
clearTimeout(timeout5);

//Exercise 3
function debounce(func, ms) {
    let timeoutId;
    
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
}
function printMe(msg) {
    console.log(`printing debounced message: ${msg}`);
}
const debouncedPrintMe = debounce(printMe, 1000);
setTimeout(() => debouncedPrintMe('Message 1'), 100);
setTimeout(() => debouncedPrintMe('Message 2'), 200);
setTimeout(() => debouncedPrintMe('Message 3'), 300);

//Exercise 4
function printFibonacci(limit) {
    let prev = 0;
    let current = 1;
    let iterations = 0;
  
    const intervalId = setInterval(() => {
      console.log(current);
      iterations++;
  
      if (iterations >= limit) {
        clearInterval(intervalId);
      } else {
        const next = prev + current;
        prev = current;
        current = next;
      }
    }, 1000);
}
printFibonacci(10);

//Exercise 5

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
let newCar = {...car};
newCar.year = 2023;
const boundDescription = car.description.bind(newCar);
setTimeout(boundDescription, 200);
let newerCar = { ...newCar };
newerCar.make = "Ferrari";
setTimeout(boundDescription, 400);
// Uses the Original Value cause the description() method inside car still captures the original year value

//Exercise 6
function multiply(...args) {
    let result = 1;
    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    console.log( result );
}
Function.prototype.delay = function (ms) {
    const originalFunction = this;
    return function (...args) {
        setTimeout(() => { originalFunction.apply(null, argsrgs);
        }, ms);
    };
};
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
multiply.delay(1000)(2, 3, 4); // prints 24 after 1000 milliseconds
multiply.delay(1500)(1, 2, 3, 4, 5); // prints 120 after 1500 milliseconds

// 6.c

// Define the multiply function with 4 parameters
function multiply(a, b, c, d) {
    const result = a * b * c * d;
    console.log(result);
}
  
  // Extend the Function prototype to add a 'delay' method
Function.prototype.delay = function (ms) {
    const originalFunction = this;
    return function (...args) {
      setTimeout(() => {
        originalFunction.apply(null, args); 
      }, ms);
    };
};
  
  
multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds

//Exercise 7
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.toString = function () {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    };
}
function Student(name, age, gender, cohort){
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}
const person1 = new Person('James Brown', 73, 'male');
const person2 = new Person('Mary Johnson', 45, 'female');
const student1 = new Student('Albert A', 19, 'male', '2023');
console.log('person1: ' + person1.toString());
console.log('person2: ' + person2.toString());
console.log('student1: ' + student1.toString());
console.log('Cohort: ' + student1.cohort);

//Exercise 8 
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
}
class AlarmClock extends DigitalClock{
    constructor(prefix, wakeupTime = '07:00'){
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
    start(){
        this.display();
        this.timer = setInterval(() => {
            const currentTime = new Date();
            const currentHours = currentTime.getHours();
            const currentMinutes = currentTime.getMinutes();
            const [alarmHours, alarmMinutes] = this.wakeupTime.split(':'). map(Number);

            if (currentHours === alarmHours && currentMinutes === alarmMinutes) {
                console.log('Wake Up');
                this.stop();
            }   else {
                this.display();
            }
        }, 1000);
    }
}
const precisionClock = new PrecisionClock('precision clock:', 500);
const AlarmClock = new AlarmClock('alarm clock:', '08:30');

precisionClock.start();
AlarmClock.start();

//Exercise 9 
function randomDelay() {
    const minDelay = 1000; 
    const maxDelay = 20000;
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  
    return new Promise((resolve) => {
      setTimeout(() => {
        if (delay % 2 === 0) {
            resolve('Successful delay');
        } else {
            rejects('Delay failed');
        }
      }, delay);
    });
}
  
randomDelay()
    .then((message) => {
    console.log('Success:', message);
    })
    .catch((error) => {
        console.error('Error:', error)
    });
  
//Exercise 10

import fetch from 'node-fetch';

globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

async function fetchMultipleURLs(urls) {
  try {
    const results = await Promise.all(urls.map(url => fetchURLData(url)));
    return results;
  } catch (error) {
    throw error;
  }
}

// Usage
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/invalid-url'
];

fetchMultipleURLs(urls)
  .then(data => console.log('Results:', data))
  .catch(error => console.error('Error:', error.message));
