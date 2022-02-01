const Format = require('./format');

class AccountRecord {
  constructor(formatClass = Format) {
    this.statement = ['date || credit || debit || balance'];
    this.formatClass = formatClass;
  }

  recordTransaction(amount, balance, type) {
    const date = new Date();
    this.statement.splice(1, 0, (this.formatClass.formatTransaction(date, amount, balance, type)));
  }

  getStatement() {
    return this.statement.join('\n');
  }

}

module.exports = AccountRecord;
