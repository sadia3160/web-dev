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

acc = createBankAccount(500);

acc.deposit(100);
console.log(acc.getBalance());

acc.deposit(100);
console.log(acc.getBalance());


//2



//3