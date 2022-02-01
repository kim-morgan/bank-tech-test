const AccountRecord = require('../src/account_record');

const formatTransactionMock = jest.fn();
formatTransactionMock.mockReturnValueOnce('31/01/2022 || 500.00 || || 500.00').mockReturnValueOnce('31/01/2022 || 10.00 || || 510.00').mockReturnValueOnce('31/01/2022 || || 250.00 || 250.00');

const formatClassMock = {
  formatTransaction: formatTransactionMock,
};

const record = new AccountRecord(formatClassMock);

describe('AccountRecord', () => {
  it('Can get a statement, initializing with just the blank header', () => {
    expect(record.getStatement()).toBe('date || credit || debit || balance');
  });
  it('Can record a credit transaction and show it on the statement', () => {
    record.recordTransaction(500, 500, 'deposit');
    expect(record.getStatement()).toBe(
      'date || credit || debit || balance\n31/01/2022 || 500.00 || || 500.00',
    );
  });
  it('Record transactions in reverse chronological order', () => {
    record.recordTransaction(10, 510, 'deposit');
    expect(record.getStatement()).toBe(
      'date || credit || debit || balance\n31/01/2022 || 10.00 || || 510.00\n31/01/2022 || 500.00 || || 500.00',
    );
  });
  it('Can record a withdrawal and show it on the statement', () => {
    record.recordTransaction(250, 250, 'withdrawal');
    expect(record.getStatement()).toBe(
      'date || credit || debit || balance\n31/01/2022 || || 250.00 || 250.00\n31/01/2022 || 10.00 || || 510.00\n31/01/2022 || 500.00 || || 500.00',
    );
  });
});
