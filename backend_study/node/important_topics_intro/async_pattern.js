/* 
    1. blocking code
    2. promises
    3. refactor to async
    4. node's native option
*/

//promise

//WAY 1 : using promise
const { readFile, writeFile } = require('fs');

const path = require('path');
const fileName = path.join(__dirname, '../initial_study/content/notes-async.txt')

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, res)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(res);
            }
        })
    })
}

getText(fileName)
.then((result) => console.log(result))
.catch((err) => console.log(err));

//WAY 2 : using async/await and promise
const fileName1 = path.join(__dirname, '../initial_study/content/first.txt');
const fileName2 = path.join(__dirname, '../initial_study/content/second.txt');
const start = async () => {
    try{
        const first = await getText(fileName1);
        console.log(first);
        const second = await getText(fileName2);
        console.log(second);
    } catch (err){
        console.log(err);
    }
    
}

start();

//WAY 3: native option of nodejs
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
/*
    you get the same thing of above two lines by writing,
    const { readFile, writeFile } = require('fs').promises;
 */

const fileName3 = path.join(__dirname, '../initial_study/content/check1.txt');
const fileName4 = path.join(__dirname, '../initial_study/content/check2.txt');

const newStart = async () => {
    try{
        const first = await readFilePromise(fileName3, 'utf8'); 
        console.log(first);
        const second = await readFilePromise(fileName4, 'utf8');
        console.log(second);

        await writeFilePromise(fileName4, 'yo check 2');
    } catch (err){
        console.log(err);
    }
    
}

newStart();