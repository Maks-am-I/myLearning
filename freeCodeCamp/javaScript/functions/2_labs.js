// build a Boolean Check Function
function booWho(a) {
  let type = typeof a;

  if (type == 'boolean') {
    return true;
  } else {
    return false;
  }
}

// build an Email Masker
function maskEmail(email) {
  let lastLetter = email.indexOf('@') - 1;
  let sliceFromEmail = email.slice(1, lastLetter);
  let countLetterSlice = sliceFromEmail.length;
  let answer = email.replace(sliceFromEmail, '*'.repeat( countLetterSlice));
  
  return answer;
};

let email = 'mikc3000@mail.ru';
console.log(maskEmail(email));

// build a Celsius to Fahrenheit Converter
function convertCtoF(cel) {
  return cel * (9 / 5) + 32;
}

// build a Card Counting Assistant
let count = 0;
function cardCounter(card) {
  let increasedList = '23456';
  let decreasedList = '10JQKA';

  if (increasedList.includes(card)) {
    count++;
  } else if (decreasedList.includes(card)) {
    count--;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

// build a Leap Year Calculator
function isLeapYear(number) {
  let devisionByFour = number % 4 === 0;
  let devisionByHundred = number % 100 === 0;
  let devisionByFourhundred = number % 400 === 0;
  console.log(devisionByFour, !devisionByHundred, devisionByFourhundred);

  if (devisionByFour && !devisionByHundred || devisionByFourhundred) {
    return `${number} is a leap year.`
  } else {
    return `${number} is not a leap year.`
  } 
}

let year = 2000;
let result = isLeapYear(year);
console.log(result);

// implement the Truncate String Algorithm
function truncateString(str, num) {
  let lengthStr = str.length;
  let points = '...';
  let newStr;

  if (lengthStr > num) {
    newStr = str.slice(0, num) + points;
  } else {
    newStr = str;
  }

  return newStr;
}