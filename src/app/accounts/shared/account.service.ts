import { Injectable } from "@angular/core";
import { Account } from "./account.model";
import { AccountNameError } from "./account-errors";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = []

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
}