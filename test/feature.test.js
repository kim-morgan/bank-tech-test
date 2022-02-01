const Account = require('../src/account');

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2022, 0, 31));
});

let account = new Account();

global.console = {
  log: jest.fn(),
};

describe('Integrated operation of classes', () => {
  beforeEach(() => {
    account = new Account();
  });

  it('should be able to make a deposit and have it shown on the statement', () => {
    account.deposit(500);
    account.statement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance\n31/01/2022 || 500.00 || || 500.00');
  });
  it('should be able to make a deposit followed by a withdrawal and have it shown on the statement', () => {
    account.deposit(500);
    account.withdraw(250);
    account.statement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance\n31/01/2022 || || 250.00 || 250.00\n31/01/2022 || 500.00 || || 500.00');
  });
  it('should throw error when there were insufficient funds and not record the transaction', () => {
    expect(() => { account.withdraw(250); }).toThrow('Insufficient funds');
    account.statement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });
  it('should throw an error when an amount too small is deposited and not record the transaction', () => {
    expect(() => { account.withdraw(0.001); }).toThrow('Transaction value must be more than £0.01');
    account.statement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });
});
