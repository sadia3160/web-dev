const http = require('https');
//here event emitter is being extended and used

//using event emitter api 
const server = http.createServer(); //emits

server.on('request', (req, res) => { //listen 
    res.end('Welcome');
});
//check nodejs doc for more events like 'response'

server.listen(5000);