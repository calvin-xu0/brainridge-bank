import { Routes } from '@angular/router';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

export const routes: Routes = [
  {
    path: 'account-creation',
    title: 'Account Creation',
    component: AccountCreationComponent
  },
  {
    path: 'fund-transfer',
    title: 'Fund Transfer',
    component: FundTransferComponent
  },
  {
    path: 'transaction-history',
    title: 'Transaction History',
    component: TransactionHistoryComponent
  }
];
