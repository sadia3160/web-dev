//
const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger, authorize]);     // multiple middleware func in app.use
//app.use([authorize, logger]); 

app.get('/', (req, res) => { 
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.listen(5000, () => {
    console.log("server is listening... | on port 5000");
});


 