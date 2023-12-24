// window

window.alert();

console.log(window.innerWidth);

const x = 100; //x in the global scope

function run() {
    console.log(window.innerHeight);

    console.log(x, 'in function');
}

run();

if (true) {
    console.log(x, 'in block');
}

function add() {
    const x = 1; //you can overwrite the x outside (the x in the global scope)
    const y = 50;
    console.log(x + y);
}

console.log(y); //y is not defined cuz it's in global scope

add();
