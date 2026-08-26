// streams are used to read or write sequentially 

/* STREAM extends EventEmitter class
# 4 types of stream
    1. writeable: write seqn
    2. readable: read seqn
    3. duplex: both read and write seqn
    4. transform: transform where data can be modified when reading/wrting 
*/

/*
 const { writeFileSync } = require('fs');

 for(let i=0; i < 1000; i++){
    writeFileSync('./important_topics_intro/big.txt', `Hi no ${i+1}\n`, {flag: 'a'});
 }
*/

//
 const { createReadStream } = require('fs');
 const stream = createReadStream(
    './important_topics_intro/big.txt', {
    highWaterMark: 30000, //controls size
    //encoding: 'utf8'
});

 stream.on('data', (result) => {
    console.log(result);
 });

 stream.on('error', (err) => console.log(err));


 //learn how to read and write in chunks using stream!
