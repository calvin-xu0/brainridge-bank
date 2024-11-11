import { Component, Output, inject } from '@angular/core';
import { AccountService } from '../../accounts/shared/account.service';
import { Account } from '../../accounts/shared/account.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AccountCardComponent } from '../../accounts/account-card/account-card.component';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fund-transfer',
  standalone: true,
  imports: [AccountCardComponent, CurrencyPipe, MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule, ReactiveFormsModule],
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
    amount: [0, [Validators.required, Validators.min(0.01)]]
  })

  onSubmit(transferDirection: string) {

  }

  changeAccount(side: string) {
    if (side === 'left') {
      console.log(this.fundTransferForm.value)
      this.leftAccount = this.accountService.getAccountByName(this.leftSelectedName)
    } else if (side === 'right') {
      this.rightAccount = this.accountService.getAccountByName(this.rightSelectedName)
    }
  }
}
