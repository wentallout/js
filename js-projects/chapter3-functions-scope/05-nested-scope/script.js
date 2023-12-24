function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }

    second();
}

first();

if (true) {
    const x = 100;

    if (x === 10) {
        const y = 200;
        console.log(x + y);
    }

    console.log(y); //can't access y cuz y is in a different scope
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
