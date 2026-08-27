const express = require('express');
const app = express();
const { countries } = require('../data');


app.get('/', (req, res) => {    
    res.send('<h1>Home Page</h1><a href="/api/countries"> countries </a>');
});

//using map
app.get('/api/countries', (req, res) => {
    const gist = countries.map((item) => {
        const {rank, country, year} = item;
        return {rank, country, year}; //return js obj
    });
    res.json(gist);
});

//using find
app.get('/api/countries/1', (req, res) => { //doing this for each item is not efficient
    const singleItem = countries.find((item) => item.rank === '1');
    res.json(singleItem);
});

//using route params
app.get('/api/countries/:rankNo', (req, res) => { //route params can be more complex
    const { rankNo } = req.params; //to capture value from url path directly; rankNo is a string
    const singleItem = countries.find(
        (item) => item.rank === rankNo
    ); 

    if(!singleItem){
        return res.status(404).send('404 not found');
    }
    return res.json(singleItem);
});

// query string params or url params 
// a way for us to send small chunk of information to the server 
// using url 

 app.get('/api/v1/query', (req, res) => {
    const {country, year} = req.query;
    let sortedData = [...countries];
    if(country){
        sortedData = sortedData.filter((item)=>{
            return item.country===country;
        });
    }
    if(year){
        sortedData = sortedData.filter((item)=>{
            return item.year===year;
        });
    }

    if(sortedData.length < 1){
        return res.json({success: true, data: [] });
    }
    return res.status(200).json(sortedData);
 });


app.listen(5000, () => {
    console.log("server is listening... | on port 5000");
});
