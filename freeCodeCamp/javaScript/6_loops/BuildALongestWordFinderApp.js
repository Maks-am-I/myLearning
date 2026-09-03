function findLongestWordLength(str) {
  let longCount = 0;
  let newLongCount = 0;
  const listWords = str.split(' ');

  for (let words of listWords) {
    if(words.length > newLongCount) {
      newLongCount = words.length;
    }
  }

  return newLongCount;
}