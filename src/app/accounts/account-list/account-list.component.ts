import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { AccountCardComponent } from '../account-card/account-card.component';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [AccountCardComponent, MatButtonModule, RouterLink],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {
  private accountService = inject(AccountService)
  accounts = this.accountService.getAccounts()
}
