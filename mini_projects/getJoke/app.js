const btn = document.querySelector("#jkb");
const dv = document.querySelector("#myJoke");

const joke = async () => {
        dv.textContent="";
        try{
            const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
            if(!res.ok){
                throw new Error(`HTTP: ${res.status}`);
            }

            const data = await res.json();
            
            if(data['type']=="twopart"){
                //console.log(data['setup']);
                //console.log(data['delivery']);

                const pr1 = document.createElement("p");
                pr1.textContent = data['setup'];
                dv.appendChild(pr1);

                const pr2 = document.createElement("p");
                pr2.textContent = data['delivery'];
                dv.appendChild(pr2);

            } else{
                //console.log(data['joke']);

                const pr = document.createElement("p");
                pr.textContent = data['joke'];
                dv.appendChild(pr);
            }
        }
        catch(err){
            dv.textContent="Failed to get a joke!"
        }
};


btn.addEventListener("click", ()=>{
    dv.textContent="Loading..."
    setTimeout(()=> joke(), 300);
});

