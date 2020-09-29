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
// const sumUp = num => {
//     let total = 0;
//     for(let i = 0; i<=num; i++){
//         total += num;
//     }
//     return total;
// }
// console.log(sumUp(7));

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
 * ********SPACE COMPLEXITY**********
 * Most primitives (booleans, numbers, undefined, null) are constant space. Same with assignments
 * Strings require O(n) space where n is the length. Same with reference types ie arrays, objects
 * 
 * ****LOGARITHMS**********
 * A logarithm is the inverse of exponentiantion. ie Log to base 2 of a value equals the exponent. Eg log base 2 of 8 equals 3.
 *  Logarithmic time complexity is great O(logn) and O(nlogn) are great
 * 
 * *****BUILT-IN-DATA-STRUCTURES*******
 * Objects are unordered, key-value pairs
 * Contant time O(1) for insertion, access and removal => because there is no order
 * Searching is linear time O(N). This is not looking for a key, but looking for a certain piece of information
 * JS: Object.keys(), Object.values() and Object.entries has linear time O(N). Object.hasOwnProperty() has constant time O(1)
 * 
 * Arrays are ordered lists. Values of different types within the list
 * Use them when you need order
 * Insertion and removal: at the end it's always faster(push and  pop)=> O(1) than at the beginning (shift and unshift => O(N))
 * Searching is O(N). Access is O(1)
 * (concat-merges multiple arrays, slice-returns a copy of part of an array or the entire thing, 
 * splice- remove/replace and/or add new elements to an array, 
 * forEach/map/filter/reduce - because the loop acts on each element, also as the size of the array grows) => O(N)
 * Sorting an array = O(N*logN)
 * 
 */
//A function that accepts an integer and prints every pair of values upto and including that integer:
const printPair = pair => {
    for(let i=0; i<=pair; i++){
        for(let j=0; j<=pair; j++){
            console.log(i,j);
        }
    }

}
printPair(4);