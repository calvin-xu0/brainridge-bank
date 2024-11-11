import { Injectable, inject } from "@angular/core";
import { Account } from "../../accounts/shared/account.model";
import { Transaction } from "./transaction.model";
import { AccountService } from "../../accounts/shared/account.service";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = []
  private accountService = inject(AccountService)

  createTransaction(accountFrom: Account, accountTo: Account, transactionAmount: number): Transaction {
    const transaction = new Transaction(
      new Date(Date.now()),
      accountFrom.name,
      accountTo.name,
      accountFrom.balance - transactionAmount,
      accountTo.balance + transactionAmount,
      transactionAmount
    )
    this.accountService.updateAccountBalance(accountFrom, -transactionAmount)
    this.accountService.updateAccountBalance(accountTo, transactionAmount)
    this.transactions.push(transaction)
    return transaction
  }
}