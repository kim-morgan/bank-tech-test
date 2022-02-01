const Account = require('../src/account');

getStatementMock = jest.fn();
getStatementMock.mockReturnValueOnce(
  'date || credit || debit || balance\n31/01/2022 || || 250.00 || 250.00\n31/01/2022 || 500.00 || || 500.00'
  );

const AccountRecordMock = {
  getStatement: getStatementMock,
  recordTransaction: jest.fn()
}

global.console = {
  log: jest.fn(),
};

const account = new Account(AccountRecordMock);

describe('Account', () => {
  it('starts off with a zero balance', () => {
    expect(account.getBalance()).toBe(0);
  });
  it('can take a deposit of 500', () => {
    account.deposit(500);
    expect(account.getBalance()).toBe(500);
  });
  it('can show statement', () => {
    account.statement();
    expect(global.console.log).toHaveBeenCalledWith(
      'date || credit || debit || balance\n31/01/2022 || || 250.00 || 250.00\n31/01/2022 || 500.00 || || 500.00'
    );
  });
  it('can withdraw 250', () => {
    account.withdraw(250);
    expect(account.getBalance()).toBe(250);
  });
  it('should not be able to withdraw more than available funds', () => {
    expect(() => { account.withdraw(2000); }).toThrow('Insufficient funds');
  });
  it('can make deposit with two decimal places', () => {
    account.deposit(50.55);
    expect(account.getBalance()).toBe(300.55);
  });
  it('can make withdrawal with two decimal places', () => {
    account.withdraw(0.55);
    expect(account.getBalance()).toBe(300);
  });
  it('cannot deposit less than 0.01', () => {
    expect(() => { account.deposit(0.009); }).toThrow('Transaction value must be more than £0.01');
  });
  it('cannot withdraw less than 0.01', () => {
    expect(() => { account.withdraw(0.009); }).toThrow('Transaction value must be more than £0.01');
  });
});
