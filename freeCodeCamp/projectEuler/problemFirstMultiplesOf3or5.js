/**
 * If we list all the natural numbers below 10 that are 
 * multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
 * these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below the 
 * provided parameter value number.
 */

function multiplesOf3Or5(number) {
  let answer = 0;

  for(let i = 1; i < number; i++) {
    if(!(i % 3) || !(i % 5)) {
      answer += i;
    }
  }

  return answer;
}

multiplesOf3Or5(1000);