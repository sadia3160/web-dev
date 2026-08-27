const inpDiv = document.querySelector(".todos");
const inpBox = document.querySelector("#box");
const inpUl = document.querySelector("#task-ul");


let savedTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
if(!Array.isArray(savedTasks)){
    savedTasks = [];
}

renderTasks();

function renderTasks(){
    inpUl.innerHTML = "";

    savedTasks.forEach((li , idx)=>{

        const newTask = document.createElement("li");
        newTask.classList.add("task-style");

        newTask.setAttribute("index", idx);
        newTask.textContent = li;
            
        inpUl.appendChild(newTask);

    });
}

inpUl.addEventListener("click", (event)=>{
        const getAt = event.target.closest("li");
        if(!getAt){
            return;
        }
        else {
           // getAt.remove();
            const i = parseInt(getAt.getAttribute("index"));
            savedTasks.splice(i,1);

            localStorage.setItem("allTasks", JSON.stringify(savedTasks));
            renderTasks();
        }
});


inpBox.addEventListener("keydown", (event)=>{
    if(event.key ==="Enter" && inpBox.value.trim() !== ""){
            
            savedTasks.push(inpBox.value.trim());

            localStorage.setItem("allTasks", JSON.stringify(savedTasks));
            
            renderTasks();

            inpBox.value="";
    } 
});


