class BankAccount{
    constructor(deposit){
        this.deposit = deposit;
        console.log(deposit+" deposited");
    }
    withdraw(amount){
        if(this.deposit >= amount){
            console.log(amount+" withdrawn");
            this.deposit -= amount;
        } else {
            console.log("Failed to withdraw: Insufficient balance");
        }
    }
    getBalance(){
       console.log("Current balance: "+this.deposit);
    }
}

const myAcc  = new BankAccount(500);
myAcc.withdraw(700);
myAcc.getBalance();