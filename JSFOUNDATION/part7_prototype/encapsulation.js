class BankAccount {
    #balance = 100;   

    desposit(amount){
        this.#balance += amount
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.balance)    //undefined because we have restricted it with # withing class
//to acces this 

console.log(account.getBalance());