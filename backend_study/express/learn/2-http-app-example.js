const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('../todo-app/index.html'); 
const homeStyles = readFileSync('../todo-app/style.css'); 
const homeLogic = readFileSync('../todo-app/app.js'); 


const server = http.createServer((req, res) => { //this method here, will be invoked everytime user hits the server
    //console.log("user hit the server");
    //console.log(req);
    //console.log(req.method);
    const url = req.url;
    
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'}); //headers
        res.write(homePage);
        //res.write('<h1>Home page</h1>');
        res.end();
    }
    else if(url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'}); //setting right content-type is very important
        res.write(homeStyles);
        res.end();
    }
    else if(url === '/app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'}); //setting right content-type is very important
        res.write(homeLogic);
        res.end();
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'}); //status code matters
        res.write(`<h1>Page not found</h1><a href='/'>Return to home</a>`);
        res.end();
    }
});

server.listen(5000);


