// **______________first task______________**
/*
let calculator = {
  num1: 0,
  num2: 0,
  
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  
  sum() {
    return this.num1 + this.num2;
  },
  
  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read(2, 5);
alert( calculator.sum() );
alert( calculator.mul() );
*/

// **______________second task______________**
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().up().down().showStep().down().showStep();