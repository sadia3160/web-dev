const http = require('http');

const server = http.createServer((req, res)=>{ //request and response are obj parameters
    if(req.url === '/'){
       return res.end('Welcome to home page!');
    } 
    if(req.url === '/about'){
       return res.end("Our history..");
    }
    res.end(
        `<h1>Oops!!</h1>
        <p>404: NOT FOUND</p>
        <a href='/'>Go back to home</a>`
    )
    
});

server.listen(5000);