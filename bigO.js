//Write a function that accepts a string input and returns a reversed copy
// const reverseString = str => {
//     let reversed = '';
//     for(let i = str.length-1; i>= 0;  i--){
//         reversed =+ str[i];
//     }
//     console.log('nnnh')
//     console.log(reversed, 'revverseed111')
//     return reversed;
// }
// reverseString('alphabetical');
//Write a function that sums up 1 upto (and including) n
const sumUp = num => {
    let total = 0;
    for(let i = 0; i<=num; i++){
        total += num;
    }
    return total;
}
console.log(sumUp(7));
/**
 * We can count the number of simple operations that a computer has to perform, regardless of the size of n
 * An algorithm is O(f(n)) if the number of simple operations (its runtime) the computer has to do is eventually less
 * than a constant times f(n) as n (its input) increases.
 * f(n) could be linear =n
 * f(n) could be quadratic  =n^2
 * f(n) could be constant = 1
 * 
 * BigO is the worst case scenario, ie upperbound for runtime
 * 
 * Constants don't matter : O(500) => 0(1)
 * Smaller terms don't matter : O(n^2 + 5n + 8) => O(n^2)
 * Arithmetic operations, variable assignments are constant
 * Accessing elements in an array(by index) or in an object (by key) is constant
 * In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop
 * 
 * *************SPACE COMPLEXITY******************
 * Most primitives (booleans, numbers, undefined, null) are constant space
 * Strings require O(n) space where n is the length. Same with reference types ie arrays, objects
 */
//A function that accepts an integer and prints every pair of, including that integer,