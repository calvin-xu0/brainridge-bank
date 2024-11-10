import { Component, Input } from '@angular/core';
import { Account } from '../shared/account.model';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [CurrencyPipe, MatListModule],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {
  @Input() account!: Account
}
