//Topic: GLOBALS variables in node [note: no window in node.js]
//----------------------------

// __dirname = path to current directory
// __filename 
// require = is a function to use modules
// module = info about current module/file
// process = gives info about env, where the program is being executed

console.log(__filename);

//you can use setTimeout, setInterval
setInterval(()=>{
    console.log("Hi to node.js world");
}, 1000); //use ctrl+c to stop it

