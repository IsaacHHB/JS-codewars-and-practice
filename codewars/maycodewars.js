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