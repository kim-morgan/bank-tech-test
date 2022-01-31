const Account = require('../src/account')

let account = new Account();

describe('Account', () => {
  it('starts off with a zero balance', () => {
    expect(account.getBalance()).toBe(0);
  });
  it('can take a deposit of 500', () => {
    account.deposit(500);
    expect(account.getBalance()).toBe(500);
  });
  it('can withdraw 250', () => {
    account.withdraw(250);
    expect(account.getBalance()).toBe(250);
  })
  it('should not be able to withdraw more than available funds', () => {
    expect(() => { account.withdraw(2000); }).toThrow("Insufficient funds");
  })
});