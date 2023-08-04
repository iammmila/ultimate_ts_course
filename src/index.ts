class Account {
  nickname?: string;
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("invalid amount");
    // Record a transaction
    this._balance += amount;
  }
  // private calculateTax() {}
  get balance(): number {
    return this._balance;
  }
  // set balance(value:ts number) {
  //   if (value < 0) throw new Error("invalid value");
  //   this._balance = value;
  // }
}
let account = new Account(1, "mila", 0);
console.log(account.balance);
// account.balance = 1;
