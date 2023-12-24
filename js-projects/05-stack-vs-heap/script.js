// STACK vs HEAP

// stored on the stack
const johnName = "John";
const age = 30;

// reference values are stored on the heap
const person = {
    name: "Khoa",
    age: 40,
};

let newName = johnName;

newName = "Johnathan";

console.log(johnName, newName); //John, Johnathan



let newPerson = person;