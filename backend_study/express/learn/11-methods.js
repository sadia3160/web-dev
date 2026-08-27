const express = require('express');
const app = express();
const path = require('path');

const {people} = require('../data');

//GET
app.get('/api/people', (req, res) => { 
    res.json({success:true, data:people});
});

//POST
app.use(express.static(path.resolve(__dirname, '../public')));

//PUT


//DELETE





app.listen(5000, () => {
    console.log("server is listening... | on port 5000");
});


 