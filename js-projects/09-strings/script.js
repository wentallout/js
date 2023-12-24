let x;

x = "Hello, my name is Khoa";

const name = "John";
const age = 30;

// Template Literals
x = `Hello my name is ${name} and I am ${age} yo`;

//String Properties and Methods
const s = "Hello World";

x = typeof s;

// length is a property, not a method
x = s.length;

// Access value by key
x = s[1]; //e, 1 means getting second character

// objects all have builtin prototype, this will shows methods we can do with string
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0); //gives us the first character 'h'
x = s.indexOf("h"); //0, gives us position of a character

x = s.substring(1, 5); //ello
x = s.substring(7); //orld, start at 7 to the rest

x = s.slice(-11); // with slice we can use negative number which will start froom the end

x = "  Hello    World";
x = x.trim(); //get rid of white space

x = s.replace("World", "John");

x = s.includes("Hello");

x = s.valueOf();

x = s.split(""); //get an array, each one is the character in the string

// ---------------------//
console.log(x);
