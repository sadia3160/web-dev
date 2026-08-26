//npm = global command that comes with node
//check = npm --version

// local dependency -> only us it in a particular project
// npm i <packageName> 

// global dependency -> use it in any project
//npm install -g <packageName>

// package.json -> manifest file that stores important info about project/package
// 3 ways to create it :
/*
    1. manual approach: create package.json in the root, create the properties etc..
    2. npm init : step by step
    3. npm init -y : default
 */

const _ = require('lodash'); //if u dont install dependency then the node will not find it

const items = [1, [2, [3, [4, [5] ] ] ] ];
const newItems = _.flattenDeep(items);
console.log(newItems);