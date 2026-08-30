// **______________first task______________**
// function camelize(str) {
//   let array = str.split('-');
//   let newArray;

//   newArray = array.map((element, index) => {
    
//     if (index > 0) {
//       return element = element[0].toUpperCase() + element.slice(1);
//     }
//     return element;
  
//   });

//   return newArray.join('');
// }

// **______________second task______________**
// function filterRange( arr, a, b ) {
//   let newArr = arr.filter(element => {
//     return a <= element && element <= b;
//   });

//   return newArr;
// }

// **______________third task______________**
// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)

// function copySorted(arr) {
//   let newArray = [];
//   newArray = newArray.concat(arr).sort();

//   return newArray;
// }

// **______________fourth task______________**
function Calculator() {
  this.number1;
  this.number2;

  this.calculate = function(str) {
    str = str.split(' ');
    this.number1 = +str[0];
    this.number2 = +str[2];

    if (str.includes('+')) {
      return this.number1 + this.number2;
    } else {
      console.log(this.number2);
      return this.number1 - this.number2;
    };
  }

  this.addMethod(name, func) = function() {
    this.name = func;
  }
}
let calc = new Calculator;
calc.addMethod("*", (a, b) => a * b);

console.log( calc.calculate("3 + 7") ); // 10
