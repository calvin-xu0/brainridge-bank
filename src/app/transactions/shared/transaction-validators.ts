import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Account } from "../../accounts/shared/account.model";

export function transactionBalanceValidator(
  accountA: Account | undefined, accountB: Account | undefined
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const transferAmount = control.get('amount')?.value
    if (transferAmount === undefined || accountA === undefined || accountB === undefined) {
      return null
    }
    const errors: any = {}
    if (transferAmount > accountA.balance) {
      errors['insufficientBalanceLeft'] = { value: `Insufficient balance in ${accountA.name}` }
    }
    if (transferAmount > accountB.balance) {
      errors['insufficientBalanceRight'] = { value: `Insufficient balance in ${accountB.name}` }
    }

    if (Object.keys(errors).length === 0) {
      return null
    } else {
      return errors
    }
  }
}