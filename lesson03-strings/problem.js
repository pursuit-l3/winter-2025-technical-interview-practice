/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

// TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array

*/

function stringMatching(text, pattern) {
  let indices = []; 
  let regex = new RegExp(pattern, "g");
  let match;

  if(!text || !pattern){
    return indices;
  }

  while ((match = regex.exec(text)) !== null) {
    indices.push(match.index)
  }

  return indices;

}

console.log(stringMatching("ababcababcabc", "abc"));
console.log(stringMatching("hello world", "xyz"));
console.log(stringMatching("abababab", "aba"));
console.log(stringMatching("aaaaa", "aa"));


module.exports = stringMatching;
