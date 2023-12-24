const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
// };

//faster way
const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

//Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
};

const {
    id: todoId,
    title,
    user: { name },
} = todo;

console.log(todoId);

// ** Destructure arrays, the ... in this scenario is called rest operator
const numbers = [23, 67, 33, 49];
const [first, second, ...nums] = numbers;
console.log(first, second, nums); //23 67
