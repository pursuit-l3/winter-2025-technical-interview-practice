// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums) => {
  return nums.some((num, index) => nums.indexOf(num) !== index);
};

// console.log(hasDuplicate([2,9,4,5,6,7,8,9,99]));

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1, str2) => {
    return [...str1].reduce((count, char) => count + (str2.split(char).length - 1), 0);

};

// console.log(countLetterOccurrences("abc", "abracadabra")); 
// console.log(countLetterOccurrences("xyz", "hello world")); 

// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums) => {
    if (nums.length < 2) return 0;
    return Math.max(...nums) - Math.min(...nums);
};

// console.log(maxDifference([2, 9, 4, 5, 6, 7, 8, 9, 99])); 
// console.log(maxDifference([5, 3, 10, 1, 20]));
