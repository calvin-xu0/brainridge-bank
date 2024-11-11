import { Injectable, inject } from "@angular/core";
import { Account } from "../../accounts/shared/account.model";
import { Transaction, TransactionLog } from "./transaction.model";
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

  getTransactionsForHistory(accountName: string) {
    const reverseChronologicalTransactions: TransactionLog[] = []
    this.transactions.forEach(t => {
      if (accountName === t.fromAccountName) {
        reverseChronologicalTransactions.push(
          {
            date: t.date,
            otherAccountName: t.toAccountName,
            newBalance: t.fromAccountNewBalance,
            transactionAmount: t.transactionAmount
          }
        )
      } else if (accountName === t.toAccountName) {
        reverseChronologicalTransactions.push(
          {
            date: t.date,
            otherAccountName: t.fromAccountName,
            newBalance: t.toAccountNewBalance,
            transactionAmount: t.transactionAmount
          }
        )
      }
    })
    reverseChronologicalTransactions.reverse()
    return reverseChronologicalTransactions
  }
}