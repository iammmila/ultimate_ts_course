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
  getBalance(): number {
    return this._balance;
  }
}

let account1 = new Account(1, "Mila", 0);
