// middleware are functions that executes
//during the request to the server
// req => middleware => res

const express = require('express');
const app = express();

const logger = (req, res, next) => {    //you can create a logger module and import and use it in the app.get
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);

    //1. pass it to the next middleware OR,
    //2. terminate the cycle
    next();         //***
}
app.get('/', logger, (req, res) => {
    
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    
    res.send('About');
});

app.listen(5000, () => {
    console.log("server is listening... | on port 5000");
});


 