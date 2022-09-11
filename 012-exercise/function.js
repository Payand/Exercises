// Summery function starts
const summery = (text, chNum) => {
  let givenText = text;
  let shortend = givenText.substring(0, chNum);
  let result = `${shortend}...`;
  return result;
};

console.log(summery("Hello Ali welcome to the course.", 10));
// Summery function ends

//  SecretCard function starts
function secretCard(cardNumber) {
  let cardEnc = String(cardNumber).slice(0, 12);
  let result = `${cardEnc}****`;
  return result;
}
console.log(secretCard("3375066374552148"));

// SecretCard function ends

//censor function starts
const censor = function (text, censoredWord) {
  let givenText = text;
  let result = givenText.replaceAll(
    censoredWord,
    "*".repeat(censoredWord.length)
  );

  return result;
};

console.log(censor("hello guys enjoy your javaEscript course?", "javaEscript"));
//censor function ends

// level function starts
const level = (experiance) => {
  if (experiance <= 2) {
    return "Junior";
  } else if (experiance >= 3 && experiance <= 5) {
    return "Midlevel";
  } else {
    return "Senior";
  }
};

console.log(level(1));
//level function ends
