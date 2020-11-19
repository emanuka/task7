//Question1
// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseThisString("Hello"));

//Question2
// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
swapcase = function swapCase(string) {
  return string.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
};
console.log(swapcase("Hello World"));

//Question3
//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
let array = [23, 32, 41, 50, 59];
let result = toCelcius(array);

function toCelcius(array) {
  return array.map(function (temp) {
    return ((temp - 32) * 5) / 9;
  });
}
console.log(result);

//Question4
//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map

let marks = [20, 30, 50, 80, 90, 100];
let examResult = marks.map(passOrFail);

function passOrFail(marks) {
  if (marks >= 75) {
    return true;
  }
  return false;
}

console.log(examResult);

//Question5
//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
const cardinalNumbers = [2, 3, 4, 5, 6];
const germanNumbers = ["zwei", "drei", "vier", "fünf", "sechs"];

germanSentence(cardinalNumbers, germanNumbers);

function germanSentence(number, word) {
  cardinalNumbers.forEach((number, index) => {
    word = germanNumbers[index];
    console.log(number + " is " + word);
  });
}

//Question6
// write code that returns an array of ONLY prime numbers that are in the array numbers
// example:
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let primeNumbers = numbers.filter(returnPrimeNumbers);

function returnPrimeNumbers(number) {
  for (i = 2; number > i; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return number > 1;
}

console.log(primeNumbers);

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT"

//Question7
function primeThreeFive() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " CSC225 RULES I LOVE JAVASCRIPT");
    } else if (i % 3 === 0) {
      console.log(i + " CSC225 RULES");
    } else if (i % 5 === 0) {
      console.log(i + " I LOVE JAVASCRIPT");
    } else {
      console.log(i);
    }
  }
}

console.log(primeThreeFive());
