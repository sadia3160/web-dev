//1

console.log("Timer on!");

setTimeout(()=>{
    console.log("Times Up!");
}, 3000);


//2 
function coinFlip(){
    return new Promise((resolve, reject) => {
        let rnum = Math.floor(Math.random() * 2);
        if(rnum === 1) {
            resolve("Head!");
        } else {
            reject("Tails!");
        }
    });
}

coinFlip()
.then((msg) => console.log(msg))
.catch((msg) => console.error(msg));

//3 Fetch  and print the titles of the first 5 posts.

const joker = async () => {

     try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!response.ok){
            throw new Error(`http {$response.status}`);
        }

        let data = await response.json();

        //console.log(data);
        data = data.slice(0, 5);
        data.forEach((p,idx)=>console.log(`${idx+1}: ${p.title}`));
     }
     catch(err){
        console.log(err.message);
     }
};

joker();


//4
//Get random Joke project task => moved to mini_projects