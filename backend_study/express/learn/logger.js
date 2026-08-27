const logger = (req, res, next) => {    //you can create a logger module and import and use it in the app.get
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);

    //1. pass it to the next middleware OR,
    //2. terminate the cycle
    next();         //***
}

module.exports = logger;