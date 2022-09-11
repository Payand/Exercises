//--------------------------------------------------------------------------------------------------
console.log(" ");
console.log("--***sentence tirmer and concatenator***-------------");
console.log(" ");
//--------------------------------------------------------------------------------------------------

//1.Enter your first Sentence.
const firstSentence = "find $something /valuable in! your life";

//2.Enter your last Sentence.
const lastSentence = "coding is one of $$$them";

// 3.Conctenate sentence.
const compeleteName = `${firstSentence} ${lastSentence}`;

// 4.Trimmmed final sentence and replace extera characters
const trimmedSentence = compeleteName
  .trim()
  .replaceAll(/[$/!@#%^&*()_+=0123456789]/g, "");

// out put of your sentence
console.log(`Result:  ${trimmedSentence}.`);
console.log(`your sentence length is : ${trimmedSentence.length} ch`);

//--------------------------------------------------------------------------------------
console.log(" ");
console.log("-- *End of sentence trimer and concatenator* -----------------");
console.log(" ");
//--------------------------------------------------------------------------------------
console.log("    ");
console.log("--***Phone Number Masker***----------------------");
console.log("    ");
//------------------------------------------------------------------------------------------------

/* 
this chunk of code in section below will get your phone number and mask 
your phone number except last four digits, 
reassign the declared variable with your phone number with existing one like the given example :
 
const fullNumber = "your phone number"

Example:
    const fullNumber = "09122119692"

*/

const fullNumber = "09122119692";
const last4Digit = fullNumber.slice(-4);
const maskedNumber = last4Digit.padStart(fullNumber.length, "*");
console.log(`Your Phonenumber is : ${fullNumber}`);
console.log(`Result: ${maskedNumber}`);

//--------------------------------------------------------------------------------------
console.log("    ");
console.log("-- *End of The Phone Number Masker*------------------------");
console.log("    ");
//------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
console.log(" ");
console.log("--***Last-Name Masker-(METHOD ONE)***-------------");
console.log(" ");
//--------------------------------------------------------------------------------------------------

/* 
This is a last name masker,the chunk of code below will return your masked last name
reassign your fullname with space between firstname and lastname to the declared variable,
like given example:

const fullName = 'your fullname"

Example :
     const fullName = "Ali shooshtari"
*/

const fullName = "Ali shooshtari";
const NameSplit = fullName.split(" ");
const maskedName = NameSplit[0].padEnd(fullName.length, "*");

// console.log(NameSplit);
console.log(`Your Name is : ${fullName}`);
console.log(`Result: ${maskedName}`);

//--------------------------------------------------------------------------------------------------
console.log(" ");
console.log("--*End of The Last-Name Masker-(METHOD ONE)*-------------");
console.log(" ");
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
console.log(" ");
console.log("--***Last-Name Masker-(METHOD TWO)***-------------");
console.log(" ");
//--------------------------------------------------------------------------------------------------

/* 
This is a last name masker(Mothod two),the chunk of code below will return your masked last name
reassign your fullname with space between firstname and lastname to the declared variable,
like given example:

const fullName = 'your fullname"

Example :
     const fullNameNoMask = "Ali shooshtari"
*/

const fullNameNoMask = "Ali shooshtari";
const fullNameNoMaskSplit = fullNameNoMask.split(" ");
const fullNameNoMaskLength = fullNameNoMask.length;
const firstNameExtraction = fullNameNoMask.slice(
  0,
  fullNameNoMaskSplit[0].length
);
const maskedfullName = firstNameExtraction.padEnd(fullNameNoMaskLength, "*");
// console.log(firstNameExtraction);
// console.log(fullNameNoMaskLength);
console.log(`Your Name is : ${fullNameNoMask}`);
console.log(maskedfullName);
//--------------------------------------------------------------------------------------------------
console.log(" ");
console.log("--*End of The Last-Name Masker-(METHOD Two)*-------------");
console.log(" ");
//--------------------------------------------------------------------------------------------------
