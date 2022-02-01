const AccountRecord = require('./account_record');

class Account {
  constructor(record = new AccountRecord()) {
    this.balance = 0;
    this.minimum_transaction = 0.01;
    this.record = record;
  }

  getBalance() {
    return this.balance;
  }

  deposit(money) {
    this.isValidTransaction(money);
    this.balance += money;
    this.record.recordTransaction(money, this.balance, 'deposit');
  }

  withdraw(money) {
    this.isValidTransaction(money);
    this.sufficientFundsCheck(money);
    this.balance -= money;
    this.record.recordTransaction(money, this.balance, 'withdrawal');
  }

  sufficientFundsCheck(money) {
    if (money > this.balance) {
      throw new Error('Insufficient funds');
    }
  }

  isValidTransaction(money) {
    if (money < this.minimum_transaction) {
      throw new Error('Transaction value must be more than £0.01');
    }
  }

  statement() {
    console.log(this.record.getStatement());
  }
}

module.exports = Account;
