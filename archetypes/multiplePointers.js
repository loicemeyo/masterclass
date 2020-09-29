/**
 * MULTIPLE PONTERS
 * Creating pointers/refernces or values that correspond to an index or position and moved towards the beginning, towards the end or towards the middle
 * based on a certain condition.
 *
 * Write a function, sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero.
 * Return an array that includes both values that sum to zero or undefined if a pair doesn't exist. 
 */

 //non-multiple pointer solution => Time complexity of O(N^2)
 const sumZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
//multiple pointer solution
const sumZero = arr => {
    let left = 0;
    let right = arr.length - 1;
    //we have to have a midpoint// ie what we're moving towards
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
//Implement a function called countUniqueValues that accepts a sorted array and counts the unique values in the array.
//This approach changes the contents of the array
const countUniqueValues = arr => {
    if (arr.length === 0 ) return 0;
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}
countUniqueValues(1,1,1,2,2,3,4,4,5,6,6,7)
