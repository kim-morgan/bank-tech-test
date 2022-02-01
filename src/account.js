const AccountRecord = require("./account_record");

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
  }

  withdraw(money) {
    this.isValidTransaction(money);
    this.sufficientFundsCheck(money);
    this.balance -= money;
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
}

module.exports = Account;
