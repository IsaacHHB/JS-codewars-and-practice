//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b)=> a + b, 0) + arr2.reduce((a,b)=> a + b, 0); 
  }

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

  function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}

//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money? Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean. If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
    if (bonus === true){
      return "£" + salary * 10;
    }else{
      return '£' + salary 
    }
  }

//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
  }

//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

const sumArray = array => {
    if (!array) {
        return 0
    }
    let s = 0;
    array.sort((a, b) => a - b).forEach((a, i) => {
        if (i !== array.length - 1 && i !== 0) {
            s += a;
        }
    })
    return s;
}

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft
  };

  //Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

//Write a function to split a string and convert it into an array of words.

function stringToArray(string){
    return string.split(' ')
  }

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
    return name === owner ? `Hello boss` : `Hello guest`
}

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let result = ''
    for(i = 1; i <= num; i++){
    result += i.toString() + ' sheep...'
    }
    return result
  }
//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0 ? true : false
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
    return x.reduce((a,b)=> a + Number(b),0)
}

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
}

// The manager of the car rental makes you some good offers. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  if(d >= 7){
    return (d * 40) - 50
  }else if(d >= 3){
    return (d * 40) - 20
  }else{
    return d * 40
  }
}

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
  return month >= 10 ? 4 : month >= 7 ? 3 : month >= 4 ? 2 : 1 
}


//Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0.Return the results as an array (or list in Python, Haskell or Elixir).
function countBy(x, n) {
  let z = [];
  const limit = x * n
  for (let i = 1; i <= limit; i++){
    if (i % x === 0) z.push(i)
  }
  return z;
}

//Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  return str.replace(/[aeiou]/gi ,'') 
}


//Welcome. In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer

function squareDigits(num){
  //may the code be with you
  let number = '' + num;
  let newNum = new Array();
  number.split('').map(n => {
    newNum.push(n**2);
  })
  
  return parseInt(newNum.join(''));
}

//The function is not returning the correct values. Can you figure out why?

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}

//You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - a - b
}

//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1]
}

//Your task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array.

function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i + 1] - arr[i] !==1){
      return arr[i + 1];
    }
  }
   return null
 }

 //Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

 function getGrade (s1, s2, s3) {
  if((s1 + s2 +s3) / 3 >= 90){
    return 'A'
  }else if((s1 + s2 +s3) / 3 >= 80){
    return 'B'
  }else if((s1 + s2 +s3) / 3 >= 70){
    return 'C'
  }else if((s1 + s2 +s3) / 3 >= 60){
    return 'D'
  }else{  
    return 'F'
  }
}

//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

function setAlarm(employed, vacation){
  return employed === true && vacation === true ? false : employed === false && vacation === true ? false : employed === false && vacation === false ? false : true
}

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let doubleChar = ''
  
  for (let i = 0 ; i < str.length; i++){
    doubleChar += str[i] + str[i]
  }
  return doubleChar
}

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

const removeEveryOther = array => array.filter((_, i) => i % 2 === 0)

//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

function enough(cap, on, wait) {
  if(on + wait <= cap){
    return 0
  }else{
    return (cap - on - wait) * -1 
  }
}

//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

const divisibleBy = (numbers, divisor) =>
  numbers.filter(number => number % divisor === 0)

// function divisibleBy(numbers, divisor) {
//   var newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % divisor === 0) {
//       newArr.push(numbers[i]);
//     } 
//   }
// return newArr;
// }

//Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b){
  if(a.length < b.length){
    return `${a}${b}${a}`
  }else{
    return `${b}${a}${b}`
  }
}

//When provided with a number between 0-9, return it in words. If your language supports it, try using a switch statement.

function switchItUp(number){
  let outPut
  switch(number){
     case 1:
      outPut = 'One'
      break;
      case 2:
      outPut = 'Two'
      break;
      case 3:
      outPut = 'Three'
      break;
      case 4:
      outPut = 'Four'
      break;
      case 5:
      outPut = 'Five'
      break;
      case 6:
      outPut = 'Six'
      break;
      case 7:
      outPut = 'Seven'
      break;
      case 8:
      outPut = 'Eight'
      break;
      case 9:
      outPut = 'Nine'
      break;
  }
  return outPut
}

//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message

function hoopCount (n) {
  if(n < 10){
    return `Keep at it until you get it`
  }else{
    return `Great, now move on to tricks`
  }  
}

//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, () In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

const expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))

//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);

//Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
  return current === 'green' 
    ? current = 'yellow'
  : current === 'yellow' 
    ? current = 'red' 
  : 'green'
}

//You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value. The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array.

function twoSort(s) {
  array = s.sort()
  return array[0].split('').join('***')
}

//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

function howMuchILoveYou(nbPetals) {
  if(nbPetals%6 == 1){
    return ("I love you");
  }else if(nbPetals%6 == 2){
    return ("a little");
  }else if(nbPetals%6 ==3){
    return ("a lot");
  }else if(nbPetals%6 ==4){
    return ("passionately");
  }else if(nbPetals%6 == 5){
    return ("madly");
  }else{
    return ("not at all");
  }
}

//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
  return str.split('').filter((x) => letter === x).length
}

//Write a method, that will get an integer array as parameter and will process every number from this array. Return a new array with processing every number of the input-array like this: If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  return array.map(i => Math.sqrt(i) == Math.sqrt(i).toFixed(0) ? Math.sqrt(i) : i * i)  
}

//Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond! By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has. The number of dogs will always be a number and there will always be at least 1 dog.

const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

const  howManyDalmatians = number => number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2];

//We want an array, but not just any old array, an array with contents! Write a function that produces an array with the numbers 0 to N-1 in it.

const arr = N => {
  const arr = [];
  for(let i = 0; i < N; i++) {
    arr.push(i);
  }
  return arr;
};

//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them. Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

function warnTheSheep(queue) {
  if (queue[queue.length -1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
    } else {
     let index = queue.findIndex( (x) => x == 'wolf' );
     return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
}

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
  return String(Number(a) + Number(b))
}

//Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

function greet(language) {
	const base ={
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
  return base[language] || base.english;
}

//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

const stringy = size =>
  [...new Array(size)].map((element, i) => (i % 2 === 0 ? 1 : 0)).join('')

//Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

String.prototype.isUpperCase = function() {
  return this==this.toUpperCase()
}

//Training JS #7: if..else and ternary operator

function saleHotdogs(n){
  return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n
}

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  const onlyNums = l.filter(e => typeof e === 'number')
  return onlyNums
}

//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase()==x.split('').reverse().join('').toLowerCase()
}

//Write a function that always returns 5 Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
  let five = 'Five!';
  return five.length;
}

//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String). Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

function hello(name) {
  if(typeof name === 'undefined' || name.length === 0){
    return 'Hello, World!'
  }else{
    return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`
  }
}

//Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below! E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

function tripleTrouble(one, two, three){
  const arr = []
  
  for(let i = 0; i < one.length; i++){
    arr.push(one[i],two[i],three[i])
  }
  return arr.join('')
 }