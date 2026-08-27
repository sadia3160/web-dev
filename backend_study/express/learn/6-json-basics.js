//
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.json([{name:'itou'}, {name:"wisteria"}]); //parameter: any json type
    //instead of hard coding json here, you can create a data.js module
    //and import the module here and pass it as parameter
    /* for example:
        at first, import it: const { products } = require('./data'); at the top
        then, pass it: res.json(products); here
     */
});

app.listen(5000, ()=>{
    console.log("server running on port 5000...");
});