console.log(addDollarSign(100)); //$100, still runs cuz it's hoisting

// Function Declaration
function addDollarSign(value) {
    return '$' + value;
}

// Function Expression
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));

// There is one difference, which is HOISTING, hoisting will move all function to the top
