// 1. given a string with three characters, return the second character
//O(1)- time and Space complexity 
function getSecondChar(wrd){
    if(wrd.length >= 2){
        return wrd[1];
    }else{
        return null;
    }
};
// console.log(getSecondChar("Diamond"))

// 2. get the second and third char from a string. the string will always have atleast three characters
//O(1)- time and Space complexity 


// 'cat' => 'at'
// 'robbed' => 'ob'

function getLettersFromChar(wrd){
    return `${wrd[1]}${wrd[2]}`;
};
// console.log(getLettersFromChar("cat"));
// console.log(getLettersFromChar("robbed"));

// 3. Given a word with 5 letters, return the second through 5th letter
//O(1)- time and space complexity 
function getSecondThroughFifthLetter (word){
  return word.slice(1);
};
// console.log(getSecondThroughFifthLetter("super"));

// 4. given a string and a number called N, return the second through the Nth character
//O(n)- time and space complexity 

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method

function getPartOfAWord(wrd, n){
    return wrd.slice(1, n);
}
// console.log(getPartOfAWord('Supercalifragilisticexpialidocious', 10))
// 5. Given an array of booleans, return an arrray of only false elements
//O(n)- time and space complexity 

// [true, true, false, true , false] => [false, false]

function getFalsesOutOfArray(arr){
     return arr.filter(bool => !bool);
};
// console.log(getFalsesOutOfArray([false, true, false, false, true, false, false, true]));
// console.log(getFalsesOutOfArray([true, true, false, true , false]));

// 6. given a string with two words, put ' the ' between the words and return the string
//O(n)- time and space complexity 

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

function putTheInTheMiddle(str){
    let newArr = str.split(" ");
    return `${newArr[0]} the ${newArr[1]}`;
};
// console.log(putTheInTheMiddle('to beach'));
// console.log(putTheInTheMiddle('for real'));
// console.log(putTheInTheMiddle('jim john'));
// console.log(putTheInTheMiddle('to house'));

// 7.  given two numbers, price and discount, return the price after the discount is applied
// price is 100 and discount is 15
//O(1)- time and space complexity 


// 100, 15 => 85

// 70, 3 => 67.9

function getPriceAfterDiscount(price, discount){
    return price - ((discount * price) / 100);
};
// console.log(getPriceAfterDiscount(100, 15));
// console.log(getPriceAfterDiscount(70, 3));

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.

module.exports = {
    getSecondChar,
    getLettersFromChar,
    getSecondThroughFifthLetter,
    getPartOfAWord,
    getFalsesOutOfArray,
    putTheInTheMiddle,
    getPriceAfterDiscount
};

