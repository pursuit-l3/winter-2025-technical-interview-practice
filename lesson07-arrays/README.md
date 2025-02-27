# Lesson #: Arrays Continued

## Warm-up (10 minutes)

## Written Question (5 minutes)

Describe how an array can be used to manage a to-do list. Explain how you would add tasks, remove tasks, and access specific tasks.

An array can manage a to do list by grouping certain tasks. You could add tasks by pushing elements into an array, remove tasks by popping or slicing elements, or even accessing tasks by its index.  

## Lecture Content (20 minutes)

In this lecture, we will expand on the topic of arrays and explore some additional concepts and operations that can be performed on arrays.

### Array Methods

JavaScript provides several built-in methods that can be used to manipulate arrays. Last lecture we reviewed 'push' and 'slice.' Here are a few more important ones.

- `pop`: Removes the last element from an array and returns it.

```javascript
let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana']
```

- `shift`: Removes the first element from an array and returns it.

```javascript
let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.shift();
console.log(removedFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'orange']
```

- `unshift`: Adds one or more elements to the beginning of an array.

```javascript
let fruits = ["banana", "orange"];
fruits.unshift("apple", "grape");
console.log(fruits); // Output: ['apple', 'grape', 'banana', 'orange']
```

### Array Iteration

Arrays can be iterated using loops or higher-order functions like `forEach`, `map`, `filter`, etc.

- `forEach`: Executes a provided function once for each array element.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});
// Output:
// 1
// 2
// 3
// 4
// 5
```

- `map`: Creates a new array with the results of calling a provided function on every element in the array.

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

- `filter`: Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
```

### Array Searching and Sorting

JavaScript provides methods for searching and sorting arrays.

- `indexOf`: Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("banana");
console.log(index); // Output: 1
```

- `sort`: Sorts the elements of an array in place and returns the sorted array.

```javascript
let fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'orange']
```

These are just a few examples of the many operations that can be performed on arrays in JavaScript. Arrays are a fundamental data structure in programming and understanding their various methods and operations is essential for effective programming.

## Problem Solving (35 minutes)

### "Remove Duplicates from Sorted Array"

## Recap (15 minutes)

In this lesson, we continued our exploration of arrays in JavaScript. We learned about various array methods that can be used to manipulate and iterate over arrays. Some of the methods we covered include `pop`, `shift`, `unshift`, `forEach`, `map`, and `filter`. These methods allow us to add and remove elements from arrays, iterate over array elements, and create new arrays based on existing ones. We also discussed array searching and sorting methods such as `indexOf` and `sort`.

Arrays are a fundamental data structure in programming and understanding their methods and operations is crucial for effective programming. Using arrays to manage a to-do list allows us to easily add tasks, remove tasks, and access specific tasks using index-based operations. However, using a more complex data structure like a linked list may provide advantages such as efficient insertion and deletion operations, especially for large to-do lists. It's important to consider the specific requirements and constraints of the application when choosing the appropriate data structure.

Overall, arrays provide a versatile and powerful tool for managing and manipulating collections of data in JavaScript.

## Wrap Up

- Push work to fork
- Fill Out Checkout form

## Additional Resources

### MDN: Array

[MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

### Practice Problems

- https://www.codewars.com/kata/normalizing-out-of-range-array-indexes
- https://www.codewars.com/kata/find-the-missing-letter
