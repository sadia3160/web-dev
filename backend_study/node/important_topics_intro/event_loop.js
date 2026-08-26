//nodejs.org docs guide on event loop
//check: course-api.com slides

//event loop: allows js to perform non-blocking i/o operation despite js being single threaded
const http = require('http');   //loads

const server = http.createServer((req,res)=>{      //offloads
    console.log("request received");
    res.end('Hi');
});

server.listen(5000, ()=>{   //runs
    console.log('Server listening | port: 5000...');
})