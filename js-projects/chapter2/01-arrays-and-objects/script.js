// Arrays are a special type of 'object' and a data structure in Javascript that stores multiple values

let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, "Hello", true, null];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My fav fruit is ${fruit[2]}`;

x = numbers.length;

// you can change stuff in an array
fruits[2] = "pear";
fruits.length = 2;
fruits[3] = "strawberry";

fruits[fruits.length] = "blueberry"; //add new stuff to an array because length = the last index +1

console.log(fruits);

console.log(numbers);
// array is 0-based, so the first will be 0
