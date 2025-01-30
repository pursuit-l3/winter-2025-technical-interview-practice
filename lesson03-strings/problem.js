/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10, 13]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) {
      result.push(i);
    }
  }
  return result;
}

module.exports = stringMatching;
