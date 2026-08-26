function calculate(){
    let cnt = 0;

    return{
    
        update(name){
            if(name==="inc"){
                 cnt += 1;
            }
            else if(name=="dec") {
                cnt -= 1;
            }
            else {
                cnt = 0;
            }
        },

        getCount(){
            return cnt;
        }
    }
}

myFunc = calculate();

const view = document.querySelector(".val");
const incr = document.querySelector("#inc");
const decr = document.querySelector("#decr");
const rst = document.querySelector("#res");

incr.addEventListener("click", () => {
    myFunc.update("inc");
    const num = myFunc.getCount();
    view.textContent = `${num}`;
});

decr.addEventListener("click", () => {
    myFunc.update("dec");
    const num = myFunc.getCount();
    view.textContent = `${num}`;
});

rst.addEventListener("click", () => {
    myFunc.update("res");
    const num = myFunc.getCount();
    view.textContent = `${num}`;
    console.log("yo");
});