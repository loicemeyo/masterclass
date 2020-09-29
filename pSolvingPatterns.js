/**
 *
 */
//Write a function that accepts a string input and returns the number of charecters in the string.
//VERSION 1
//define the object to be returned at the end
const charCount = (str) => {
  let result = {};
};
//loop through the string to check if character is alphanumeric and exists in the object, then increase its count.
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (/[a-z0-9]/.test(char)) {
    if (result[char]) {
      result[char]++;
      //else if character doesn't exist in the object set it's count to 1
    } else {
      result[char] = 1;
    }
  }
}
//return the object
return result;
//VERSION 2
const charCountt = str => {
    let results = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            results[char] = results[char]++ || 1;
        }
    }
    return results;
}
const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    //lower alpha (a-z)
    return false;
  }
  return true;
};