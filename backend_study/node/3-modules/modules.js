//Topic: Modules = encapsulated code (only share what we want)
//[note: node uses CommonJS library for that and every file in node is a module by default]
//------------------------------

const getInfo = require('./3.2-names'); //you can unpack here too
console.log(getInfo);

//greet("itou");
const getGreet = require('./3.1-utils');

//greet("itou");   // => reference error

getGreet("itou");
getGreet(getInfo.myName);
getGreet(getInfo.genInfo);


const {invoice, getFavBooks} = require('./3.3-alt');
console.log(invoice);

console.log(getFavBooks);
console.log(getFavBooks.name);




