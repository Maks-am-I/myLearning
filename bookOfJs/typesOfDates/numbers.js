// **______________first task______________**
// function counter() {
//   let number1 = +prompt('Enter first number: ');
//   let number2 = +prompt('Enter second number: ');
//   let number3 = number1 + number2;

//   alert(`Summ ${number1} + ${number2} = ${number3}`);
// }

// counter();

// **______________second task______________**

// function readNumber() {
//   let number;

//   do {
//     number = prompt('Enter your number: ');
//   } while (!isFinite(number));

//   if (number === '' || number === null) {
//     return null;
//   }

//   return +number;
// }

// let returnAnswer = readNumber();
// alert( returnAnswer );

// **______________third task______________**
// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }

// **______________fourth task______________**
function random(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

alert( random(1, 5) );