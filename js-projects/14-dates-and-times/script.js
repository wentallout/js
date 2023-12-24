// we can create a Date object in JS
let d;

d = new Date(); //typeof Date is object
d = d.toString();

d = new Date(2021, 6, 10, 30, 0); //the month is 0-based, so 0 means January
d = new Date("2021-07-10T12:30:00"); //7 means July
d = new Date("2022-07-10"); //7 means July

// why date object always one day off

d = Date.now(); //a way to mark an exact time

d = new Date("07-10-2022");
d = d.getTime(); //get timeStamp(miliseconds) for a date
d = d.valueOf();

d = new Date(1666962049745);

// convert to seconds
d = Math.floor(Date.now() / 1000); //timestamp in seconds

console.log(d);
