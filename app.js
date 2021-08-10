// my age
const myAge = 22;
// early years
let earlyYears = 2;
earlyYears *= 10.5;
// subtract 2 from early years and set it to lateryears
let laterYears = myAge - 2;
//  multiply lateryears by 4 and reassign it
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);
// add early years and years and store it in variables
let myAgeInDogYears = earlyYears + laterYears;
// write your name as strings using built-in method to convert to lower case
const myName = "Al-Hussein".toLowerCase();

// print statement to the console
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
