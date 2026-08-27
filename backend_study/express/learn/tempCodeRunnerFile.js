app.get('/', (req, res) => {    
    //callback get invoked everytime user perform get request on home or route
    res.status(200).send('Home page');
});

app.get('/about', (req, res) => {    
    res.status(200).send('About page');
});

app.all("*", (req,res)=>{  
     //path, callback function
    res.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => {
    console.log("server is listening... | on port 5000");
});