const { readFile, writeFile } = require('fs');

console.log("start");

readFile('./content/first.txt', 'utf8', (error, result)=>{
    if(error){
        console.log(error);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (error, result)=>{
        if(error){
            console.log(error);
            return;
        }
        const second = result;

        writeFile(
            './content/notes-async.txt', 
            `Here is first and second: ${first}, ${second}`,
            { flag: 'a'},
            (err, res)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(res); //undefined because writeFile doesnt return a res
                console.log("Done this task!");
            }
        )
    }) 
});

console.log("starting next task~");

//callback hell!