import { Component, Output, inject } from '@angular/core';
import { AccountService } from '../../accounts/shared/account.service';
import { Account } from '../../accounts/shared/account.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AccountCardComponent } from '../../accounts/account-card/account-card.component';

@Component({
  selector: 'app-fund-transfer',
  standalone: true,
  imports: [AccountCardComponent, MatFormFieldModule, MatSelectModule],
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.css'
})
export class FundTransferComponent {
  private accountService = inject(AccountService)
  accounts = this.accountService.getAccounts()

  leftSelectedName!: string
  leftAccount!: Account
  rightSelectedName!: string

  changeLeft() {
    const data: Account | undefined = this.accountService.getAccountByName(this.leftSelectedName)
    if (data !== undefined) {
      this.leftAccount = data
    }
  }
}
