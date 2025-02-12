/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 * 
 * Time & space complexity is O(n)
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  let originString = "";
  let newString = "";

  for(let i = 0; i < str.length; i++){
    if(/^[a-zA-Z]$/.test(str[i])){
      originString += str[i].toLowerCase();
    }
  }

  for(let i = str.length -1; i >= 0; i-- ){
    if(/^[a-zA-Z]$/.test(str[i])){
      newString += str[i].toLowerCase();
    }
  }


return newString === originString;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

module.exports = isPalindrome;
