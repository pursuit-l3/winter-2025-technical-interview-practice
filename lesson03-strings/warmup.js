// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false


const getAnagramsOrNonanagrams = (str1, str2) => {
    let noSpace1 = str1.replace(/\s+/g, '');
    let noSpace2 = str2.replace(/\s+/g, '');
    let obj1 = {};
    let obj2 = {};

    if (noSpace1.length !== noSpace2.length) {
        return false;
    }

    for (let i = 0; i < noSpace1.length; i++) {
        if (!obj1[noSpace1[i]]) {
            obj1[noSpace1[i]] = 1;
        } else {
            obj1[noSpace1[i]]++;
        }
    }


    for (let i = 0; i < noSpace2.length; i++) {
        if (!obj2[noSpace2[i]]) {
            obj2[noSpace2[i]] = 1;
        } else {
            obj2[noSpace2[i]]++;
        }
    }

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
          if (obj1[key] !== obj2[key]) {
            return false;
          }
        }
      }
      return true;

}
// console.log(getAnagramsOrNonanagrams("aba", "baa"))
// console.log(getAnagramsOrNonanagrams("hub", "huc"))
// console.log(getAnagramsOrNonanagrams("aa bb", "a b a b"))
// console.log(getAnagramsOrNonanagrams("ABA", "aba"))
// console.log(getAnagramsOrNonanagrams("aabbb", "baabb"))
// console.log(getAnagramsOrNonanagrams("a&!#bb", "aaabbbb"))

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

function areAnagrams(str1, str2) {
    const normalize = (str) => str.replace(/\s+/g, '').split('').sort().join('');
    
    return normalize(str1) === normalize(str2);
}

// Test cases
// console.log(areAnagrams("aba", "baa"));       // true
// console.log(areAnagrams("hub", "huc"));       // false
// console.log(areAnagrams("aa bb", "a b a b")); // true
// console.log(areAnagrams("ABA", "aba"));       // false (case-sensitive)
// console.log(areAnagrams("aabbb", "baabb"));   // true
// console.log(areAnagrams("a&!#bb", "aaabbbb")); // false
// console.log(areAnagrams("a&!#bb", "abb"));     // true

// 3. Given two strings, how many characters would need to be added or replaced in order to make them anagrams

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8

function minChangesToAnagram(str1, str2) {
    // Create objects to count character occurrences in each string
    let charCount1 = {};
    let charCount2 = {};
    
    // Count occurrences of each character in str1
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    
    // Count occurrences of each character in str2
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    
    let changes = 0;
    
    // Get unique characters from both strings
    let uniqueChars = new Set([...str1, ...str2]);
    
    // Calculate the number of changes needed
    for (let char of uniqueChars) {
        let count1 = charCount1[char] || 0;
        let count2 = charCount2[char] || 0;
        changes += Math.abs(count1 - count2);
    }
    
    return changes / 2;
}

// Test cases
// console.log(minChangesToAnagram("abad", "abcd")); 
// console.log(minChangesToAnagram("aabb", "baba")); 
// console.log(minChangesToAnagram("aaaazzzz", "bbbbwwww")); 





