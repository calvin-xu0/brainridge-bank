import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AccountService } from '../../accounts/shared/account.service';
import { Account } from '../../accounts/shared/account.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TransactionService } from '../shared/transaction.service';
import { MatTableModule } from '@angular/material/table';
import { TransactionLog } from '../shared/transaction.model';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, MatFormFieldModule, MatSelectModule, MatTableModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent {
  private accountService = inject(AccountService)
  private transactionService = inject(TransactionService)
  accounts = this.accountService.getAccounts()
  transactionLogs!: TransactionLog[]
  accountName!: string
  account!: Account | undefined
  displayedColumns = ['date', 'otherAccountName', 'newBalance', 'transactionAmount']

  changeAccount() {
    this.account = this.accountService.getAccountByName(this.accountName)
    this.transactionLogs = this.transactionService.getTransactionsForHistory(this.accountName)
  }
}
