import { Component, OnInit, Output, inject } from '@angular/core';
import { AccountService } from '../../accounts/shared/account.service';
import { Account } from '../../accounts/shared/account.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AccountCardComponent } from '../../accounts/account-card/account-card.component';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { transactionBalanceValidator } from '../shared/transaction-validators';

@Component({
  selector: 'app-fund-transfer',
  standalone: true,
  imports: [AccountCardComponent, CurrencyPipe, MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule, NgIf, ReactiveFormsModule],
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.css'
})
export class FundTransferComponent {
  private accountService = inject(AccountService)
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
    // console.log(this.fundTransferForm.get('amount')?.value)
  }

  changeAccount(side: string) {
    if (side === 'left') {
      this.leftAccount = this.accountService.getAccountByName(this.leftSelectedName)
    } else if (side === 'right') {
      this.rightAccount = this.accountService.getAccountByName(this.rightSelectedName)
    }
  }

  updateAmount() {
    this.fundTransferForm.setValidators([
      transactionBalanceValidator(this.leftAccount, this.rightAccount)
    ])
    this.fundTransferForm.updateValueAndValidity()
  }
}
