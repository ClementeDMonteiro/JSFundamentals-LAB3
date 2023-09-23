// Intermediate JS Lab
// Exercise 1

function ucFirstLetters(inputString){
    return inputString.replace(/[A-Z]/, match => match.toUpperCase());
}
console.log(ucFirstLetters("los angeles") ); //Los Angeles
console.log(ucFirstLetters("brazil"));
console.log(ucFirstLetters("Sydney"));

// Exercise 2
function truncate(str, max){
    if (str.length <= max){
        return str; 
    } else{
        return str.slice(0, max -3) + '...';
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

//Exercise 3

const animals = ['Tiger', 'Giraffe']
animals.push('Lion, Elephant');
animals.unshift('Penguin, Whale');
animals.sort();
function replaceMiddleAnimal(newValue){
    if (animals.length % 2 === 1){
        const middleIndex = Math.floor(animals.length / 2);
        animals[middleIndex] = newValue;
    } else{
        console.log("doesn't have a middle animal");
    }
}
replaceMiddleAnimal('Bird');
console.log(animals);

console.log ('====================');
console.log('find matching animals');
console.log ('====================');
// find match animals
function findMatchingAnimals(beginsWith){
    beginsWith = beginsWith.toLowerCase();
    const matchingAnimals = [];

    for (const animal of animals) {
        if (animal.toLowerCase().startsWith(beginsWith)){
            matchingAnimals.push(animal);
        }
    }
    return matchingAnimals;
}
const startsWithL = findMatchingAnimals('L');
console.log(startsWithL);

// Exercise 4
function camelCase(cssProp) {
    const words = cssProp.split('-');
    let camelCased = words[0];

    for (const word of words.slice(1)) {
        camelCased += word.charAt (0).toUpperCase() + word.slice(1);
    }
    return camelCased;
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

// Exercise 5
// Code is working and return the right answer.
function currencyAddition(float1, float2) {
    const fixedFloat1 = parseFloat(float1.toFixed(2));
    const fixedFloat2 = parseFloat(float2.toFixed(2));

    const result = fixedFloat1 + fixedFloat2;
    return parseFloat(result.toFixed(2));
}
const result = currencyAddition(0.20, 0.10);
console.log(result);

//letter C
function currencyOperation(float1, float2, operation) {
    const fixedFloat1 = parseFloat(float1.toFixed(2));
    const fixedFloat2 = parseFloat(float2.toFixed(2));
}

//Exercise 6

function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}
  
  const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
  const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
  
  console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
  console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

  //Exercise 7
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  function getBookTitle(bookId) {
        const foundBook = books.find(book => book.id === bookId);
    return foundBook ? foundBook.title : "Book not found";
  }
function getOldBooks(){
    const oldBooks = books.filter(book => book.year < 1950);
return oldBooks;
}
function addGenre(){
    const booksWithGenre = books.map(book => ({...book, genre: 'Classic',}));
return booksWithGenre;
}
function getTitles(authorInitial){
    const titles = books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
    return titles;
}

 
  const bookIdToFind = 3;
  const title = getBookTitle(bookIdToFind);
  console.log(title); // Output: '1984'

  const oldBooks = getOldBooks();
  console.log(oldBooks);
  
  const booksWithGenre = addGenre();
  console.log(booksWithGenre);
  
  const authorInitial = 'F';
  const titlesByAuthorF = getTitles(authorInitial);
  console.log(titlesByAuthorF);

  //Exercise 8 
const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

const phoneBookDEF = new Map(phoneBookDEFEntries);

for (const [name, phoneNumber] of phoneBookABC.entries()) {
  const firstLetter = name.charAt(0).toUpperCase();
  if (['D', 'E', 'F'].includes(firstLetter)) {
    phoneBookDEF.set(name, phoneNumber);
  }
}
function printPhoneBook(contacts){
    for (const [name, phoneNumber] of contacts.entries()){
        console.log(`${name}: ${phoneNumber}`);
    }
}
const phoneBookDEFEntries = new Map();
    phoneBookDEFEntries.set('Daniel','0477123121');
    phoneBookDEFEntries.set('Esman', '0483332222');
    phoneBookDEFEntries.set('Fernando', '0499446555');
const newPhoneNumberFCaroline = '0493332212';
phoneBookDEF.set('Caroline', newPhoneNumberFCaroline);
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEFEntries]);

for (const [name] of phoneBook){
    console.log(name);
}
console.log(phoneBook);
console.log(phoneBookDEF);
console.log("Phone Book DEF:")

//Exercise 9

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
  };
  
function sumSalaries(salaries) {
    let total = 0;
  
    for (let name in salaries) {
      total += salaries[name];
    }
  
    return total;
}
function topEarner(salaries) {
    let topSalary = 0;
    let topEarnerName = null;

    for (let name in salaries) {
        const salary = salaries[name];
        if (salary > topSalary){
            topSalary = salary
            topEarnerName = name;
        }
    }
}

const totalSalaries = sumSalaries(salaries);
const topEarnerName = topEarner(salaries);
console.log("Total Salaries:", totalSalaries);
console.log("Top Earner", topEarnerName);

//Exercise 10
const today = new Date();
const currentHours = today.getHours();
const currentMinutes = today.getMinutes();
const totalMinutesPassed = currentHours * 60 + currentMinutes;
const totalSecondsPassed = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
const birthdate = new Date('YYYY-MM--DD');
const currentDate = new Date();
const ageInMilliseconds = currentDate - birthdate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;
const years = Math.floor(ageInDays / 365);
const remainingDays = ageInDays % 365;
const months = Math.floor(remainingDays / 30); // Assuming an average of 30 days per month
const days = Math.floor(remainingDays % 30);
function daysInBetween(date1, date2) {
    const timeDifference = Math.abs(date2 - date1);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}
  
 
const date1 = new Date('2023-01-01');
const date2 = new Date('2023-09-23');
const result2 = daysInBetween(date1, date2);
  
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');
console.log(today.getMinutes() + 'minutes have passed so far today');
console.log(totalMinutesPassed + ' minutes have passed so far today');
console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
console.log(`There are ${result} days in between the two dates.`);