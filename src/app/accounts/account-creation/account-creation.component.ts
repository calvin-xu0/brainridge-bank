import { Component } from '@angular/core';
import { ACCOUNT_TYPES } from '../shared/account-types';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Account } from '../shared/account.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [FormsModule, MatFormField, MatLabel, MatRadioButton, MatRadioGroup],
  templateUrl: './account-creation.component.html',
  styleUrl: './account-creation.component.css'
})
export class AccountCreationComponent {
  accountTypes = ACCOUNT_TYPES
  model = new Account(0, 'Test name', 'Chequing', 0)
  submitted = false

  onSubmit() {
    this.submitted = true
  }
}
