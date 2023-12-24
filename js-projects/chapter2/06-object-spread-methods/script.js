let x;
const todo = {};

// same way to create object
const todo2 = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.93,
            lng: -71.3232,
        },
    },
};

x = person.address.coords.lat;

const obj1 = {
    a: 1,
    b: 2,
};

const obj2 = {
    c: 3,
    d: 4,
};

//obj 2 will be nested
const obj3 = {
    ...obj1,
    obj2,
};

//IGNORE THIS: ALTERNATIVE WAY: assign obj1 and obj2 to the empty array {}
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    {
        id: 1,
        name: 'Buy milk',
    },
    {
        id: 2,
        name: 'Buy meat',
    },
    {
        id: 3,
        name: 'pickup kids from school',
    },
    {
        id: 4,
        name: 'Take out trash',
    },
];

// access stuff inside
x = todos[0].name;

// get an array of keys from an object
x = Object.keys(todo); // ['id', 'name','completed]

// todo is an object but object doesn't have length soo we need to write this

x = Object.keys(todo).length;

// this will get us an array of values
x = Object.values(todo); //[ 1,Buy Milk,false ]

// get an array of key - value pair
x = Object.entries(todo); // [['id,1],['name','Buy Milk']]

x = todo.hasOwnProperty('name'); // return true cuz it has the name property

x = obj3;

console.log(x);
