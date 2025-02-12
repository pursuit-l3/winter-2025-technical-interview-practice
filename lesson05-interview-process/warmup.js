function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"


function capitalizeWords(str) { 
    return str.split(" ").map(ele => ele[0].toUpperCase() + ele.slice(1)).join(" ");
}
console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'
console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'


function countVowels(str) {
    let vowelLength = 0;
 
    str.toLowerCase().split("").map(letter => /^[aeiou]$/.test(letter) ? vowelLength++ : letter);

    return vowelLength;
}
console.log(countVowels("hello"));
// Expected Output: 2
console.log(countVowels("programming"));
// Expected Output: 3
