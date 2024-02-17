class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("invalid balance");
    this._balance += amount;
  }

  //getter
  get balance(): number {
    return this._balance;
  }

  //setter
  set balance(value: number) {
    if (value < 0) throw new Error("invalid value");
    this._balance = value;
  }
}

let account1 = new Account(1, "Mila", 0);
console.log(account1.balance);
// account1.balance = 0; //if we dont write setter then we get an error
