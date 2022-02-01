const Account = require("./account");

class AccountRecord {

  constructor(accountInstance = new Account()) {
    this.accountInstance = accountInstance;
    this.statement = ["date || credit || debit || balance"];
  }

  recordDeposit(amount) {
    this.accountInstance.deposit(amount);
    let date = this.getCurrentDate();
    let balance = parseFloat(this.accountInstance.getBalance()).toFixed(2);
    let formattedAmount = parseFloat(amount).toFixed(2);
    this.statement.push(`${date} || ${formattedAmount} || || ${balance}`);
  }

  recordWithdrawal(amount) {
    this.accountInstance.withdraw(amount);
    let date = this.getCurrentDate();
    let balance = parseFloat(this.accountInstance.getBalance()).toFixed(2);
    let formattedAmount = parseFloat(amount).toFixed(2);
    this.statement.push(`${date} || || ${formattedAmount} || ${balance}`);
  }

  printStatement() {
    return this.statement.join("\n");
  }

  getCurrentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}

module.exports = AccountRecord;