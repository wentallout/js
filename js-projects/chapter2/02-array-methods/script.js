const arr = [34, 55, 95, 20, 15];

arr.push(100); //add stuff to the end

arr.pop(); //remove the thing at the end

arr.unshift(99); //add stuff to the beginning (zeroindex)

arr.shift(); //remove the beginning

arr.reverse(); //reverse the array

x = arr.includes(200);

x = arr.indexOf(15);

x = arr.indexOf(340); //if it's not available then indexOf will be -1

x = arr.slice(1, 4); //start 1 and end before the 4 [55,95,20]

x = arr.splice(1, 4); //[55, 95, 29, 15], splice actually change the initial array

x = arr.splice(3, 1);

//chain methods
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(arr);
