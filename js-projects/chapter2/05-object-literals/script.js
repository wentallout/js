let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: false,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sport'],
};

x = person.name;

// access nested data
x = person.address.state;

x = person.hobbies;
x = person.hobbies[0];

// Modify a property
person.name = 'Jane Doe';
person['isAdmin'] = false;

// remove a property
delete person.age;

// add property to an object
person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// don't do this btw
const person = {
    'first name': 'Brad',
    'last name': 'Traversy',
};

x = person;

console.log(person);
