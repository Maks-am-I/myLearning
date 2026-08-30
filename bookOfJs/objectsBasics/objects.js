// **______________first task______________**
// let user = {};

// user['name'] = 'John';
// user['surname'] = 'Smith';
// console.log(`Name: ${user.name} \nSurname: ${user.name}`);

// user['name'] = 'Pete';
// console.log(`Name: ${user.name} \nSurname: ${user.name}`);

// delete user['name'];
// console.log(`Field 'name' in user: ${'name' in user}`);

// **______________second task______________**
// function isEmpty(obj) {
//   let count = 0;
  
//   for (let prop in obj) {
//     count++;
//   }

//   return count === 0 ? true : false;
// }

// **______________third task______________**
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// let sum = 0;

// function summer(obj) {
//   let sum = 0;

//   for (let prop in obj) {
//     sum += obj[prop];
//   }

//   return sum;
// }

// sum = summer(salaries);
// console.log(sum);

// **______________fourth task______________**
function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      obj[prop] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);