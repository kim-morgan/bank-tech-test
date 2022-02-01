const AccountRecord = require('../src/account_record');

const accountClassMock = {
  deposit: jest.fn(),
  withdraw: jest.fn(),
  getBalance: jest.fn(),
};

const formatTransactionMock = jest.fn();
formatTransactionMock.mockReturnValueOnce('31/01/2022 || 500.00 || || 500.00').mockReturnValueOnce('31/01/2022 || 10.00 || || 510.00').mockReturnValueOnce('31/01/2022 || || 250.00 || 250.00');

const formatClassMock = {
  formatTransaction: formatTransactionMock,
};

const record = new AccountRecord(accountClassMock, formatClassMock);

describe('AccountRecord', () => {
  it('Can print a statement, initializing with just the blank header', () => {
    expect(record.printStatement()).toBe('date || credit || debit || balance');
  });
  it('Can record a credit transaction and show it on the statement', () => {
    record.recordTransaction(500, 'deposit');
    expect(record.printStatement()).toBe('date || credit || debit || balance\n31/01/2022 || 500.00 || || 500.00');
  });
  it('Record transactions in reverse chronological order', () => {
    record.recordTransaction(10, 'deposit');
    expect(record.printStatement()).toBe('date || credit || debit || balance\n31/01/2022 || 10.00 || || 510.00\n31/01/2022 || 500.00 || || 500.00');
  });
  it('Can record a withdrawal and show it on the statement', () => {
    record.recordTransaction(250, 'withdrawal');
    expect(record.printStatement()).toBe('date || credit || debit || balance\n31/01/2022 || || 250.00 || 250.00\n31/01/2022 || 10.00 || || 510.00\n31/01/2022 || 500.00 || || 500.00');
  });
});
