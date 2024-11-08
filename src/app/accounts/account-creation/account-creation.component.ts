import { Component, inject } from '@angular/core';
import { ACCOUNT_TYPES } from '../shared/account-types';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [FormsModule, MatError, MatFormField, MatLabel, MatRadioButton, MatRadioGroup, ReactiveFormsModule],
  templateUrl: './account-creation.component.html',
  styleUrl: './account-creation.component.css'
})
export class AccountCreationComponent {
  private formBuilder = inject(FormBuilder)
  accountTypes = ACCOUNT_TYPES
  submitted = false

  accountCreationForm = this.formBuilder.group({
    name: ['', Validators.required],
    accountType: ['', Validators.required],
    balance: [0, [Validators.required, Validators.min(0)]]
  })

  onSubmit() {
    this.submitted = true
  }
}
