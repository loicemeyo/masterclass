/**SLIDING WINDOW
 * Useful when we have a set of data ie an array or string and we're looking for a subset of that data that is continuous.
 * This pattern involves creating a window which can either be an array or a number from one position(sliding) it to another.
 * Depending on a certain condition the window either increases or closed and a new window is created.
 */
//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum
//sum of n consecutive elements in the array.


// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10


//naive
const maxSubarraySum = (arr, num) => {
    if(num > arr.length) return null;
    let max = -Infinity;
    for(let i=0; i<arr.length -num+1; i++){
        let temp = 0;
        for(let j=0; j<num; j++){
            temp += arr[i+j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}
//sliding window
const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num ) return null;
    for(let i=0; i<num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i=num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}