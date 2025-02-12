// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

function getNumberOfStars(n){
    let newString = '';

    for (let i = 1; i <= n; i++){
        newString += '*';
    }

    return newString;
}
// console.log(getNumberOfStars(5));
// console.log(getNumberOfStars(12));
// console.log(getNumberOfStars(3));


// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

function getFirstAndLastStar(n){
    let newString = '';

    for (let i = 1; i <= n; i++){
        if(i === 1){
            newString += '*';
        }else if(i === n){
            newString += '*';
        }else{
            newString += ' ';
        }
    }

    return newString;

}
// console.log(getFirstAndLastStar(5));
// console.log(getFirstAndLastStar(12));


// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

function createSquare(n){
    console.log(n);

}
createSquare("hey");
// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
