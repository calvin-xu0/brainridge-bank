import { Component, Input } from '@angular/core';
import { Account } from '../shared/account.model';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [CurrencyPipe, MatListModule, NgClass],
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css', '../../app.component.css']
})
export class AccountCardComponent {
  @Input() account!: Account
}
