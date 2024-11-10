import { Component, Output, inject } from '@angular/core';
import { AccountService } from '../../accounts/shared/account.service';
import { Account } from '../../accounts/shared/account.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AccountCardComponent } from '../../accounts/account-card/account-card.component';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-fund-transfer',
  standalone: true,
  imports: [AccountCardComponent, CurrencyPipe, MatFormFieldModule, MatListModule, MatSelectModule],
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.css'
})
export class FundTransferComponent {
  private accountService = inject(AccountService)
  accounts = this.accountService.getAccounts()

  leftSelectedName!: string
  leftAccount!: Account | undefined
  rightSelectedName!: string
  rightAccount!: Account | undefined

  changeAccount(side: string) {
    if (side === 'left') {
      this.leftAccount = this.accountService.getAccountByName(this.leftSelectedName)
    } else if (side === 'right') {
      this.rightAccount = this.accountService.getAccountByName(this.rightSelectedName)
    }
  }
}
