# Lesson 5: Arrays

## Warm-up (10 minutes)

## Written Question (5 minutes)

Question: Imagine you have a collection of vintage records that you like to listen to, but you want to make the records you liked the most easiest to access. How would you organize your collection so that your favorite records are quickly reachable? Consider how you might want to retrieve a record based on how much you like it, rather than just randomly picking. What benefits would this type of organization provide?

I would put my most played records in front of the rest of the pile. Then I would know the songs that are in the beginning of the pile are most likely my favorite or most played and it will be easier to access.

## Lecture Content (20 minutes)

In this lecture, we will explore the concept of arrays in JavaScript. Arrays are a fundamental data structure that allow us to store and manipulate collections of values.

### Introduction to Arrays

An array is an ordered collection of elements, where each element can be accessed using its index. The index starts from 0 for the first element and increments by 1 for each subsequent element. Arrays can store values of any data type, including numbers, strings, objects, and even other arrays.

### Creating Arrays

To create an array in JavaScript, we can use the array literal syntax `[]` or the `Array` constructor. Here are a few examples:

```javascript
// Using array literal syntax
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

// Using Array constructor
let colors = new Array("red", "green", "blue");
let mixed = new Array(1, "two", { name: "John" });
```

### Accessing Array Elements

We can access individual elements of an array using square brackets `[]` and the index of the element. For example:

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3
```

### Modifying Array Elements

Arrays are mutable, which means we can modify their elements after they are created. We can assign new values to specific elements using the index. For example:

```javascript
let fruits = ["apple", "banana", "orange"];
fruits[1] = "grape";
console.log(fruits); // Output: ['apple', 'grape', 'orange']
```

### Array Methods

JavaScript provides several built-in methods that can be used to manipulate arrays. Here are two commonly used methods:

- `push`: Adds one or more elements to the end of an array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange", "grape");
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
```

- `slice()`: Returns a new array containing a portion of the original array.

### Using `slice()`

The `slice()` method returns a new array containing a portion of the original array. It takes two parameters: the starting index (inclusive) and the ending index (exclusive). Here's an example:

```javascript
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(2, 4);
console.log(sliced); // Output: [3, 4]
```

In this example, `slice(2, 4)` returns a new array `[3, 4]` which contains the elements at index 2 and 3 from the original `numbers` array.

### Iterating Over Arrays

We can use loops, such as `for` and `forEach`, to iterate over the elements of an array. Here's an example using a `for` loop:

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


### Conclusion

In this lecture, we covered the basics of arrays in JavaScript. We learned how to create arrays, access and modify their elements, use array methods, and iterate over arrays. Arrays are a powerful tool for organizing and manipulating collections of data in JavaScript.

## Problem Solving (35 minutes)

## Recap (10 minutes)

### Review Warmup

### Review Written Warmup

In this lesson, we explored the concept of arrays in JavaScript. Arrays are a fundamental data structure that allow us to store and manipulate collections of values. We learned about the basics of arrays, including how to create arrays using array literal syntax or the Array constructor. We also learned how to access and modify array elements using index notation, as well as how to use various array methods for manipulation. Additionally, we discussed how to iterate over arrays using loops like `for` and `forEach`. Finally, we saw some examples of array manipulation in JavaScript, such as adding and removing elements, slicing arrays, and splicing elements into arrays. Arrays are a powerful tool for organizing and manipulating collections of data in JavaScript.

## Wrap Up

- Push work to fork
- Fill Out Checkout form

## Additional Resources

### MDN: Array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

### Practice Problems

- https://www.codewars.com/kata/find-the-smallest-integer-in-the-array
- https://www.codewars.com/kata/sum-of-prime-indexed-elements
- https://www.codewars.com/kata/sort-the-odd
```
