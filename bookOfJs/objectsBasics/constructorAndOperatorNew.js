// **______________first task______________**

// function Calculator() {
//   this.num1;
//   this.num2;
  
//   this.read = function() {
//     this.num1 = +prompt('Enter first number: ');
//     this.num2 = +prompt('Enter second number: ');
//   };

//   this.sum = function() {
//     return this.num1 + this.num2;
//   }

//   this.mul = function() {
//     return this.num1 * this.num2;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// **______________second task______________**

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt('Enter new value: ');
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
