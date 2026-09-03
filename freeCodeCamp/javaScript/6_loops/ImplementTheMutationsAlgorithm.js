function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  let flag = false;

  for (let char of secondWord) {

    if(!firstWord.includes(char)) {
      console.log(char)

      return flag;
    }
  }

  flag = true;
  return flag;
}

console.log(mutation(["hello", "Hello"]));