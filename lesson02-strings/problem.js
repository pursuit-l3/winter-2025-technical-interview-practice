/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * 
 * Time complexity is O(n^2) 
 * Space complexity is O(n)
 * 
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let str = "";
  let words = [];

  if (s === '') {
    return 0
  }

  for (let i = 0; i < s.length; i++) {
    if (!str.includes(s[i])) {
      str += s[i];
    }else{
      words.push(str);
      str = "";
      str += s[i];
    }
  }
  words.push(str);


  let max = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest
  }, words[0])

return max.length;
// return words;
}
console.log(lengthOfLongestSubstring("!@#$%^&*()"));

module.exports = lengthOfLongestSubstring;
