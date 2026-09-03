/**
 * Design a Sum All Numbers Algorithm
In this lab, you will need to design a sum all numbers algorithm.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named sumAll that accepts an array of two numbers.
sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(numbers) {
  let sum = 0;
  let minNumber = numbers[0] < numbers[1] ? numbers[0] : numbers[1];
  let maxNumber = numbers[0] > numbers[1] ? numbers[0] : numbers[1];

  for(let index = minNumber; index <= maxNumber; index++) {
    sum += index;
  }

  return sum;
}

console.log(sumAll([4, 1]))