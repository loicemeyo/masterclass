// FREQUENCY COUNTER - using an object to collect values and their frequencies.
// This pattern uses objects/sets to collect values/frequencies of values. This can often avoid the occassion for nested loops or O(N^2) operations
// with arrays and strings.

// Write a function called same which accepts two arrays. The function should return true if every value in the array has its corresponding value squared
// in the second array. The frequency of the values in both arrays must be the same.
// **NON-FREQUENCY COUNTER SOLUTION/NAIVE
const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        let presentIndex = arr2.indexOf(arr1[1]**2);
        if (presentIndex === -1){
            return false;
        }
        arr2.splice(presentIndex, 1)
    }
    return true;
}
same([1,2,4,4], [4,16,16,1]);
/**The idea behind the frequency counter is you usyally use an object to construct a profile that breaks down the contents of an array or string
 * of a linear structure and then you compare that breakdown to another object.
 */
const sameII = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}
//Given two strings, write a function to determine if the second string is an anagram of the first
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    const lookup = {};
    for(let i=0; i<str1.length; i++){
        let letter = str1[i];
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
    }
    for(let i=0; i<str2.length; i++){
        let letter = str2[i];
        //if letter does not exist in the first string or is zero, it's not valid anagram
        if(!(lookup[letter])){
            return false
        } else {
            lookup[letter] =-1;
        }
    }
    return true;
}