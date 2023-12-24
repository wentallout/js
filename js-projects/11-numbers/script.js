const num = 5;

console.log(typeof num);

x = num.toString();

x = num.length; //undefined because numbers have no length
x = num.toString().length; //1, because 5 is 1 digit

x = num.toFixed(2); //5.00, toFixed turn number into string, 2 means so lam tron

x = num.toPrecision(2); //làm tròn tới bao nhiêu số? vd
x = num.toExponential(2);

x = num.toLocaleString("en-US");

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE; //5e-324

console.log(x);
