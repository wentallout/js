// you can nest arrays inside arrays
let x;

const fruits = ["apple", "pear", "orange"];

const berries = ["strawberry", "blueberry", "rasberry"];

//fruits.push(berries); //push actually affect the original array - fruits

const nestedItemInside = fruits[3][1]; //you can stack the index to access nested item

const allFruits = [fruits, berries];

x = allFruits;

x = allFruits[1][0];

// you can also concat array

x = fruits.concat(berries); //concat give us one single array with everything from fruits and berries

// spread operator (...), you can use this on both arrays and objects
x = [...fruits, ...berries]; //["apple", "pear", "orange", "strawberry", "blueberry", "rasberry"];

//flatten arrays means to make sure there are no nested array inside array
const arr = [1, 2, [3, 4], 5, [6, 7]];

const flatArr = arr.flat(); //[1, 2, 3, 4, 5, 6, 7]

//static methods on array object

x = Array.isArray("Hello");
x = Array.from("12345"); //["1","2","3","4","5"]

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(fruits);
