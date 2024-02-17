"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("invalid balance");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account1 = new Account(1, "Mila", 0);
console.log(account1.nickname);
console.log(account1.getBalance());
