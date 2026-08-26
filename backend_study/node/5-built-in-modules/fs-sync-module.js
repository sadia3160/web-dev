const { readFileSync, writeFileSync } = require('fs');

console.log("start");

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//utf8 is a character encoding system that tells nodejs to return readable string instead of 0s and 1s and prevents corruption as well
console.log(first,second);

writeFileSync(
    './content/notes.txt',
    `Here is first and second: ${first}, ${second}`,
    { flag: 'a' },
    console.log("Done this task!")
);

console.log("starting the next task~");