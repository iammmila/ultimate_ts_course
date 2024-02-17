"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("invalid balance");
        this.balance += amount;
    }
}
let account1 = new Account(1, "Mila", 0);
account1.deposit(100);
console.log(account1);
console.log(account1.balance);
console.log(typeof account1);
console.log(account1 instanceof Account);
