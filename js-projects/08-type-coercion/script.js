let x;

x = 5 + "5";

x = 5 + Number("5");

x = 5 * "5";

x = Number(true); //1
x = Number(false); //0

x = 5 + true;
x = 5 + false;

x = 5 + undefined; //MaM

// --------------------------//
console.log(x, typeof x);
