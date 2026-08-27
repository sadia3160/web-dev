const express = require('express');
const path = require('path');
const app = express();

//static and middleware
app.use(express.static(path.resolve(__dirname, '../public')));

/*
    app.get('/', (req, res) => {
        //homePage = web-dev\backend_study\todo-app\index.html
        res.sendFile(path.resolve(__dirname, '../../todo-app/index.html'));
        //adding to static asset
        //SSR
    });
*/

app.get('*any', (req, res) => {
    res.status(404).send("resource not found!");
});



app.listen(5000, ()=>{
    console.log("server is listening on port no 5000...");
})

/*  
    API VS SSR
    > API = http interface to interact with data         
    - API - JSON
    - send data
    - res.json()

    > SSR
    - SSR - TEMPLATE
    - send template
    - res.render()
*/