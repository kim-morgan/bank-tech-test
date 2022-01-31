class Account  {

  constructor() {
    this.balance = 0;
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
      throw "Insufficient funds";
    }
  }

  isValidTransaction(money) {
    if (money < 0.01) {
      throw "Transaction value must be more than £0.01";
    }
  }
}

module.exports = Account;