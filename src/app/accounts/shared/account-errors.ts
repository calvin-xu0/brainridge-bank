export class AccountNameError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AccountNameError'
  }
}