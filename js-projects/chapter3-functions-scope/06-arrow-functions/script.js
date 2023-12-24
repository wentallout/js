function add(a, b) {
    return a + b;
}

// Arrow function syntax
const add = () => {
    return a + b;
};

// one line, implicit return
const subtract = (a, b) => a - b;

const double = (a) => {
    a * 2;
};

//return an object that has name
const createObj = () => ({
    name: 'Brad',
});

const numbers = [1,2,3,4,5]


console.log(add(1, 2));
console.log(subtract(10, 5));
