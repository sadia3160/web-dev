const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./learn/index.html'); 


const server = http.createServer((req, res) => { //this method here, will be invoked everytime user hits the server
    //console.log("user hit the server");
    console.log(req);
    //console.log(req.method);
    const url = req.url;
    
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'}); //headers
        res.write(homePage);
        //res.write('<h1>Home page</h1>');
        res.end();
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'}); //setting right content-type is very important
        res.write('<h1>about page</h1>');
        res.end();
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'}); //status code matters
        res.write('<h1>Not found</h1>');
        res.end();
    }
});

server.listen(5000);

//ports _ MDN
//mime types _ MDN
