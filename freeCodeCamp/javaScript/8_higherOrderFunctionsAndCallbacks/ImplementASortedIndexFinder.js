function getIndexToIns(list, number) {
  list.push(number);
  
  let index = list.sort((a, b) => a - b);;

  return index.findIndex(a => a == number);
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));