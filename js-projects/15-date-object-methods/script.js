let x;

let d = new Date("1/2/2020");
x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth(); //stiill 0-based, so 0 means January
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//THIS IS BETTER THAN METHODS ABOVE
x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default").format(d);

// the Intl and the toLocaleString are kinda similar
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
x = d.toLocaleString("default", { weekday: "long", year: "numeric", month: "short", hour: "numeric" });

console.log(x);
