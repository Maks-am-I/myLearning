// build a Boolean Check Function
function booWho(a) {
  let type = typeof a;

  if (type == 'boolean') {
    return true;
  } else {
    return false;
  }
}

// build an Email Masker
function maskEmail(email) {
  let lastLetter = email.indexOf('@') - 1;
  let sliceFromEmail = email.slice(1, lastLetter);
  let countLetterSlice = sliceFromEmail.length;
  let answer = email.replace(sliceFromEmail, '*'.repeat( countLetterSlice));
  
  return answer;
};

let email = 'mikc3000@mail.ru';
console.log(maskEmail(email));
