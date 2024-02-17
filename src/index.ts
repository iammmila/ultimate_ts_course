class Account {
  readonly id: number; // * readonly - we cannot change this id
  owner: string;
  private _balance: number;
  nickname?: string; // * optional properties

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("invalid balance");
    this._balance += amount;
  }
  getBalance(): number {
    return this._balance;
  }
}

let account1 = new Account(1, "Mila", 0);
console.log(account1.nickname); //undefined
console.log(account1.getBalance()); // 0
