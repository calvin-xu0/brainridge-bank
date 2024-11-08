import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'
import { RouterLink } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [MatButtonModule, MatListModule, RouterLink],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {
  private accountService = inject(AccountService)
  accounts = this.accountService.getAccounts()
}
