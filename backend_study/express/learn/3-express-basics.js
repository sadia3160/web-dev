// expressjs is a nodejs web app framework, designed to
// develop websites, web apps and APIs much faster and easier 
// than the built-in http module that comes by default in nodejs

//install guide: npm install express --save

const express = require('express');
const app = express();

app.get('/', (req, res) => {    
    //callback get invoked everytime user perform get request on home or route
    res.status(200).send('Home page');
});

app.get('/about', (req, res) => {    
    res.status(200).send('About page');
});

app.all("*any", (req,res)=>{  
     //path, callback function
    res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
    console.log("server is listening... | on port 5000");
});

// app.get          //read data (default)
// app.post         //insert data
// app.put          //update data
// app.delete       //delete data
// app.all
// app.use
// app.listen