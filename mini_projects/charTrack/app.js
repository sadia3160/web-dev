const ip = document.querySelector(".txt");
const upd = document.querySelector("#news");

ip.addEventListener("input", ()=>{
    upd.textContent = `${ip.value.trim().length} Characters`;
})