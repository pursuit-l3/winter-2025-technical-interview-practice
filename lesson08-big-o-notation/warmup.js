// Please use array methods such as .map(), .filter(), .reduce(), .every(), .some(), and .find() to solve the following prompts.

// Prompt 1: Write a function that takes an array of numbers as input and returns a new array with only the even numbers.

function getEvenNumbers(arr){
   return arr.filter(num => num % 2 === 0);
}

// console.log(getEvenNumbers([1,1,2,2,3,4,6,7,87,6,6]));

// Prompt 2: Write a function that takes an array of strings as input and returns a new array with the lengths of each string.

function getStringLengths(arr){
    return arr.map(str => str.length);
}

// console.log(getStringLengths(["happy", "glad", "flabbergasted"]));

// Prompt 3: Write a function that takes an array of objects representing students, where each object has a "name" and "age" property. Return a new array with only the names of the students who are above 18 years old.

function getNamesOfAdults(arr){
    return arr
    .filter(student => student.age >= 18)
    .map(student => student.name);    
}

console.log(getNamesOfAdults([
    {name: "Diamond", age: 23},
    {name: "Sideara", age: 17},
    {name: "Ronald", age: 21}
]))