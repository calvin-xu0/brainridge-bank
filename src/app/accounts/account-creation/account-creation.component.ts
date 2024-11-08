import { Component, inject, signal } from '@angular/core';
import { ACCOUNT_TYPES } from '../shared/account-types';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../shared/account.service';
import { Account } from '../shared/account.model';
import { AccountNameError } from '../shared/account-errors';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule, ReactiveFormsModule, RouterLink],
  templateUrl: './account-creation.component.html',
  styleUrl: './account-creation.component.css'
})
export class AccountCreationComponent {
  private router = inject(Router)
  private formBuilder = inject(FormBuilder)
  private accountService = inject(AccountService)
  accountTypes = ACCOUNT_TYPES

  accountCreationForm = this.formBuilder.group({
    name: ['', Validators.required],
    accountType: ['', Validators.required],
    balance: [0, [Validators.required, Validators.min(0)]]
  })

  nameError = signal('')

  onSubmit() {
    const data = this.accountCreationForm.value as Account

    try {
      this.accountService.createAccount(data)
      this.router.navigate(['/accounts'])
    } catch (e) {
      if (e instanceof AccountNameError) {
        this.nameError.set(e.message)
        console.log(e.message)
      }
    }
  }
}
