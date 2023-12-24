// Default Params
function registerUser(user = 'Bot') {
    return user + ' is registered';
}

// Rest Params
// ...numbers can be anything you want tbh
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
};

// console.log(loginUser(user));

// Arrays as params

// if you user a rest operator ...arr => it will turn your input into an array
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
