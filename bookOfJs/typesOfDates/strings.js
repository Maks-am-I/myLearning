// **______________first task______________**
// function ucFirst(str) {
//   let sliceStr = str.slice(1);
//   let firstWord = str[0].toUpperCase();

//   return firstWord + sliceStr;
// }

// console.log( ucFirst("вася") == "Вася" );

// **______________second task______________**
// function checkSpam(str) {
//   const SPAM_WORD_1 = 'viagra';
//   const SPAM_WORD_2 = 'xxx';

//   str = str.toLowerCase();
  
//   if (str.includes(SPAM_WORD_1) || str.includes(SPAM_WORD_2)) {
//     return true;
//   } 

//   return false;
// }

// console.log( checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// **______________third task______________**
// function truncate(str, maxLength) {
//   const CHAR = '…';
//   let newStr;
  
//   newStr = str.length > maxLength
//     ? str.slice(0, maxLength - 1) + CHAR
//     : str;
    
//   return newStr;
// }

// **______________fourth task______________**
function extractCurrencyValue(str) {
  return str.slice(1);
}