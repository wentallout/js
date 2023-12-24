const x = 100;

if (true) {
    const y = 200;

    console.log(x + y);
}

console.log(x + y);

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// var VS let and const

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c);

//HOT TIPS: you cannot access var that was created in a function cuz that var is function-scoped


