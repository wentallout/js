const word = "developer";

const myNewString = (word) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
};

console.log(myNewString(word));