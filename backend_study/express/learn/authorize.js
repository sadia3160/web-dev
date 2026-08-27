const authorize = (req, res, next) => { 
    const {user} = req.query;
    if(user === 'itou'){
        req.user = {name:"itou",id:314};
        next();
    }
    else{
        res.status(401).send('unauthorized human'); 
    } 
//json web token - database
}

module.exports = authorize;