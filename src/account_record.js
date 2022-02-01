const Account = require("./account");
const Format = require("./format");

class AccountRecord {

  constructor(accountInstance = new Account(), formatClass = Format) {
    this.accountInstance = accountInstance;
    this.statement = ["date || credit || debit || balance"];
    this.formatClass = formatClass;
  }

  recordTransaction(amount, type) {
    this.accountInstance.deposit(amount);
    let date = new Date();
    let balance = this.accountInstance.getBalance();
    this.statement.push(this.formatClass.formatTransaction(date, amount, balance, type));
  }

  printStatement() {
    return this.statement.join("\n");
  }

}

module.exports = AccountRecord;