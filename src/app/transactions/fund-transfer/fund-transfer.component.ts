import { Component, inject } from '@angular/core';
import { AccountService } from '../../accounts/shared/account.service';
import { Account } from '../../accounts/shared/account.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AccountCardComponent } from '../../accounts/account-card/account-card.component';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { transactionBalanceValidator } from '../shared/transaction-validators';
import { TransactionService } from '../shared/transaction.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fund-transfer',
  standalone: true,
  imports: [AccountCardComponent, CurrencyPipe, MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule, NgIf, ReactiveFormsModule],
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css', '../../app.component.css']
})
export class FundTransferComponent {
  private accountService = inject(AccountService)
  private transactionService = inject(TransactionService)
  private formBuilder = inject(FormBuilder)
  accounts = this.accountService.getAccounts()

  leftSelectedName!: string
  leftAccount!: Account | undefined
  rightSelectedName!: string
  rightAccount!: Account | undefined

  fundTransferForm = this.formBuilder.group({
    amount: [0, [
      Validators.required,
      Validators.min(0.01),
    ]]
  },
    { validators: transactionBalanceValidator(this.leftAccount, this.rightAccount) }
  )

  get amount() {
    return this.fundTransferForm.get('amount')
  }

  onSubmit(transferDirection: string) {
    if (transferDirection === 'rightToLeft') {
      this.transactionService.createTransaction(this.rightAccount as Account, this.leftAccount as Account, this.fundTransferForm.get('amount')?.value as number)
    } else if (transferDirection === 'leftToRight') {
      this.transactionService.createTransaction(this.leftAccount as Account, this.rightAccount as Account, this.fundTransferForm.get('amount')?.value as number)
    }
    this.changeAccount('left')
    this.changeAccount('right')
    this.updateValidators()
    this.accounts = this.accountService.getAccounts()
  }

  changeAccount(side: string) {
    if (side === 'left') {
      this.leftAccount = this.accountService.getAccountByName(this.leftSelectedName)
    } else if (side === 'right') {
      this.rightAccount = this.accountService.getAccountByName(this.rightSelectedName)
    }
  }

  updateValidators() {
    this.fundTransferForm.setValidators([
      transactionBalanceValidator(this.leftAccount, this.rightAccount)
    ])
    this.fundTransferForm.updateValueAndValidity()
  }
}
