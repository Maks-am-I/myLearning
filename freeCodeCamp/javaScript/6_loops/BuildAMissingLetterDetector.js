/**
 * Build a Missing Letter Detector
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named fearNotLetter.
The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
The function should find the missing letter in the passed letter range and return it.
If all letters are present in the range, the function should return undefined.
 */

function fearNotLetter(string) {
  let firstChar = string[0].charCodeAt();
  const lengthString = string.length;

  for(let i = 0; i < lengthString - 1; i++) {
    console.log(string[i])
    if(string[i].charCodeAt() + 1 !== string[i + 1].charCodeAt()) {
      return String.fromCharCode(++firstChar);
    }
    firstChar++;
  }
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));