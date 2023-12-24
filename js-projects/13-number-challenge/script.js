const x = Math.floor(Math.random() * 100 + 1); //1-100
const y = Math.floor(Math.random() * 50 + 1); //1-50

function getRandomNumber(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}



const sum = (num1, num2) => {
    return num1 + num2;
};

const difference = (num1, num2) => {
    return num1 - num2;
};

const product = (num1, num2) => {
    return num1 * num2;
};

const quotient = (num1, num2) => {
    return num1 / num2;
};

const rm = (num1, num2) => {
    return num1 % num2;
};

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(rm);
