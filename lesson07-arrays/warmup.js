// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

function sumArray(arr){
    return arr.reduce((acc, currVal) => {
        return acc + currVal;
    }, 0)
}
// console.log(sumArray([1,2,3,4,5,6,7]));

// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.

function findMax(arr){
    return Math.max(...arr);
}
// console.log(findMax([1,2,3,4,5,6,7]));

// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.

function reverseArray(arr){
    return arr.reverse();

}

// console.log(reverseArray([1,2,3,45,6]))