// **______________first task______________**
// let styles = ['Джаз', 'Блюз'];
// console.log(styles);

// styles.push('Рок-н-ролл');
// console.log(styles);

// let midArray = Math.floor(styles.length / 2);
// styles[midArray] = 'Классика';
// console.log(styles);

// let fisrtElement = styles.shift();
// console.log(`First element: ${fisrtElement}`);
// console.log(styles);

// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// **______________second task______________**
// function sumInput() {
//   let array = [];
//   let number;
//   let sumArray = 0;

//   do {
//     number = prompt('Enter your number: ');

//     if (+number) {
//       array.push(+number);
//     }

//   } while (number !== null && number !== '' && !Number.isNaN(+number))

//   for (num of array) {
//     sumArray += num;
//   }

//   return sumArray;
// }

// **______________third task______________**
function getMaxSubSum(arr) {
  let maxSum = 0;
  let newMaxSum = 0;

  for (number of arr) {
    maxSum += number;

    if (maxSum > newMaxSum) {
      newMaxSum = maxSum;
    } else if (maxSum < 0) {
      maxSum = 0;
    }
  }

  return newMaxSum;
}