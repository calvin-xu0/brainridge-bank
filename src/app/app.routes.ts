import { Routes } from '@angular/router';
import { AccountCreationComponent } from './accounts/account-creation/account-creation.component';
import { FundTransferComponent } from './transactions/fund-transfer/fund-transfer.component';
import { TransactionHistoryComponent } from './accounts/transaction-history/transaction-history.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';

export const routes: Routes = [
  {
    path: 'accounts',
    title: 'Accounts',
    component: AccountListComponent
  },
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
  },
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  }
];
