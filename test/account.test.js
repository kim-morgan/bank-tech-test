const Account = require('../src/account')

describe('Account', () => {
  it('starts off with a zero balance', () => {
    let account = new Account();
    expect(account.getBalance()).toBe(0);
  });
});