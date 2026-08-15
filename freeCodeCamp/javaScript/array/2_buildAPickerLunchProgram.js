const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);

  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);

  return arr;
}

function removeLastLunch(arr) {
  let removeItem = arr.pop();
  
  if (removeItem) {
    console.log(`${removeItem} removed from the end of the lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }

  return arr;
}

function removeFirstLunch(arr) {
  let removeItem = arr.shift();

  if (removeItem) {
    console.log(`${removeItem} removed from the start of the lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }

  return arr;
}

function getRandomLunch(arr) {
  let lengthArr = arr.length;

  if (lengthArr !== 0) {
    let randomNum = Math.floor(Math.random() * (lengthArr));
    let changeLunch = arr[randomNum];
    console.log(`Randomly selected lunch: ${changeLunch}`);
  } else {
    console.log('No lunches available.');
  }
}

function showLunchMenu(arr) {
  let hasItemInArr = arr.length !== 0;

  if (hasItemInArr) {
    console.log(`Menu items: ${arr.join(', ')}`);
  } else {
    console.log('The menu is empty.');
  }
}