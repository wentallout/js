//  CHALLENGE 1

const arr = [1, 2, 3, 4, 5];

//mutate array into [6,5,4,3,2,1,0];

const arrStart = arr[arr.length - 1] + 1;

const arrEnd = arr[0] - 1;

arr.reverse();
arr.push(arrEnd);
arr.unshift(arrStart);

console.log("Challenge1", arr);

// CHALLENGE 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arrConcat = arr1.concat(arr2);

const arrConcatUnique = [...new Set(arrConcat)];

console.log(arrConcatUnique);
