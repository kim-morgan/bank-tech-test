const Account = require('./account');
const Format = require('./format');

class AccountRecord {
  constructor(accountInstance = new Account(), formatClass = Format) {
    this.accountInstance = accountInstance;
    this.statement = ['date || credit || debit || balance'];
    this.formatClass = formatClass;
  }

  recordTransaction(amount, type) {
    if (type === 'deposit') {
      this.accountInstance.deposit(amount);
    } else if (type === 'withdrawal') {
      this.accountInstance.withdraw(amount);
    }
    const date = new Date();
    const balance = this.accountInstance.getBalance();
    this.statement.splice(1, 0, (this.formatClass.formatTransaction(date, amount, balance, type)));
  }

  getStatement() {
    return this.statement.join('\n');
  }

  printStatement() {
    console.log(this.getStatement());
  }
}

module.exports = AccountRecord;
