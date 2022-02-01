const AccountRecord = require('../src/account_record');

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2022, 0, 31));
});

let record = new AccountRecord();

global.console = {
  log: jest.fn(),
};

describe('Integrated operation of classes', () => {
  beforeEach(() => {
    record = new AccountRecord();
  });

  it('should be able to make a deposit and have it shown on the statement', () => {
    record.recordTransaction(500, 'deposit');
    record.printStatement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance\n31/01/2022 || 500.00 || || 500.00');
  });
  it('should be able to make a deposit followed by a withdrawal and have it shown on the statement', () => {
    record.recordTransaction(500, 'deposit');
    record.recordTransaction(250, 'withdrawal');
    record.printStatement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance\n31/01/2022 || || 250.00 || 250.00\n31/01/2022 || 500.00 || || 500.00');
  });
  it('should throw error when there were insufficient funds and not record the transaction', () => {
    expect(() => { record.recordTransaction(250, 'withdrawal'); }).toThrow('Insufficient funds');
    record.printStatement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });
  it('should throw an error when an amount too small is deposited and not record the transaction', () => {
    expect(() => { record.recordTransaction(0.001, 'withdrawal'); }).toThrow('Transaction value must be more than £0.01');
    record.printStatement();
    expect(global.console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });
});
