//1
function createBankAccount(initial){
    
    let balance = initial;

    return{
        deposit(money){
            balance += money;
        },
        getBalance(){
            return balance;
        }

    }
}

acc = createBankAccount(500); //functions are stored inside acc

acc.deposit(100);           
console.log(acc.getBalance());

acc.deposit(100);           //acc remembers the balance used in prev call, and changes it in this call
console.log(acc.getBalance());


//2
for(let i=1; i<=3; i++){ //prints 1,2,3
    setTimeout(() => console.log(i), 1000);
}

for(var i=1; i<=3; i++){ //print 4,4,4
    setTimeout(() => console.log(i), 1000);
}
/*  
    this is because, var is function scoped and let is block scoped

    #for let everytime a brand new 'i' was created but 
    #for var, it is hoisted so first it was declared like that: var i = undefined and then
    the same 'i' was updated. only one var variable i is used here.

    *** here, callback function inside setTimeout is async (initiate now execute later) and
        loop part and setTimeout is sync (execute now). so sync code executed first and 
        everytime the loop run, it updated 'i' and scheduled the callback function inside setTimeout for later to be executed. 
        and then when the loop ends, it calls those scheduled setTimeout's callback functions.. here,

        #for var, the same 'i' prints (note: it prints the updated var 'i' which is 4)
        #for let, as everytime it created brand new 'i' so every callback func inside setTimeout got
        different 'i' so it prints 0,1,2 accordingly
*/

//3
/*
    closure is creating a function inside a function and returning it. Also,
    using variables declared in the outer function, inside the inner function.
    And as well as, remembering value of all variables used inside the inner function so,
    for next inner function call, it can use the previous value of variables.
    (usually, when function call ends values of variables disappears but incase of closure, the 
    inner function keeps them in the memory to be used later on.)
*/