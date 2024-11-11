export class Transaction {
  constructor(
    public date: Date,
    public fromAccountName: string,
    public toAccountName: string,
    public fromAccountNewBalance: number,
    public toAccountNewBalance: number,
    public transactionAmount: number
  ) { }
}

export class TransactionLog {
  constructor(
    public date: Date,
    public otherAccountName: string,
    public newBalance: number,
    public transactionAmount: number
  ) { }
}