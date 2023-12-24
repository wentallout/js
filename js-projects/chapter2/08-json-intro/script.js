// valid JSON is kinda strange cuz you need " " on both key and value if it's string.

const post = {
    id: 1,
    title: 'Body One',
};

console.log(post);

//Convert to JSON string
const str = JSON.stringify(post);

//PARSE you can parse a JSON string back to an object later
const parsed = JSON.parse(str); //get back the object

// you can not say str.id because you have to parse it first

const posts = [
    {
        id: 1,
        title: 'Post One',
    },
    {
        id: 2,
        title: 'Post Two',
    },
];
