import { Routes } from '@angular/router';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

export const routes: Routes = [
  { path: 'account-creation', component: AccountCreationComponent },
  { path: 'fund-transfer', component: FundTransferComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent }
];
