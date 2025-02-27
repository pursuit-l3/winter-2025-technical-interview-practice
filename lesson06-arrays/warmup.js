// 1. Counting: create a function that prints out the numbers 1-10
const createNumbers = () => {
    let i = 1
    while(i <= 10){
        console.log(i)
        i++;
    }
}
// console.log(createNumbers());

// 2. Evens: create a function that prints out the even numbers 1-20
const printEvenNumbers = () => {
    let i = 1;
    while(i <= 20){
        if(i%2 === 0){
            console.log(i);
        }
        i++;
    }
};
// console.log(printEvenNumbers());

// 3. FizzBuzz: create a function that prints out the numbers 1-100. If the number is divisible by 3, print "Fizz" instead of the number. If the number is divisible by 5, print "Buzz" instead of the number. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

const printFizzBuzz = () => {
    let i = 1;
    while(i <= 100){
        if(i%3 === 0 && i%5 === 0){
            console.log("FizzbBuzz");
        }
        else if(i%3 === 0){
            console.log("Fizz");
        }else if(i%5 === 0){
            console.log("Buzz");
        }
        i++;
    }
};
console.log(printFizzBuzz());