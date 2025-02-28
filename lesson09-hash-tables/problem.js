/*
Problem Prompt:
Write a function that takes in two strings and returns true if they are valid anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
*/

function areAnagrams(str1, str2) {
  let hashTable = new Map();

  if (str1.length === str2.length) {
    str1.split("").map((letter, ind) => hashTable.set(letter, ind));
  } else {
    return false;
  }

  let result = str2.split("").every(letter => hashTable.has(letter));

  return result;

}

console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Expected output: true
console.log(areAnagrams("restful", "fluster")); // Expected output: true
console.log(areAnagrams("programming", "coding")); // Expected output: false

module.exports = areAnagrams;

