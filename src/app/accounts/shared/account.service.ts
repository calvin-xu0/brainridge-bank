import { Injectable } from "@angular/core";
import { Account } from "./account.model";
import { AccountNameError } from "./account-errors";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [
    new Account('ChequingA', 'Chequing', 100),
    new Account('SavingsB', 'Savings', 10)
  ]

  createAccount(newAccount: Account) {
    if (this.accounts.find(account => account.name === newAccount.name)) {
      throw new AccountNameError('Name already in use')
    }
    this.accounts.push(newAccount)
    return newAccount
  }

  getAccounts() {
    return this.accounts
  }

  getAccountByName(accountName: string) {
    return this.accounts.find(account => account.name === accountName)
  }

  updateAccountBalance(account: Account, change: number) {
    const index = this.accounts.findIndex(a => a.name === account.name)
    this.accounts[index] = { ...account, balance: account.balance + change }
    return this.accounts[index]
  }
}