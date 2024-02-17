class Account {
  readonly id: number; // * readonly - we cannot change this id
  owner: string;
  balance: number;
  nickname?: string; // * optional properties

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("invalid balance");
    this.balance += amount;
  }
}

let account1 = new Account(1, "Mila", 0);
account1.deposit(100);
console.log(account1);
console.log(account1.balance);
console.log(typeof account1); //object
console.log(account1 instanceof Account); //true
// !In JavaScript, the instanceof operator is used to check
//!  whether an object is an instance of a particular class or constructor function.
// !  It returns true if the object is an instance of the specified class, otherwise it returns false.
