class Account  {

  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(money) {
    if (money < 0.01) {
      throw "Transaction value must be more than £0.01";
    }
    this.balance += money;
  }

  withdraw(money) {
    if (money < 0.01) {
      throw "Transaction value must be more than £0.01";
    }
    this.sufficientFundsCheck(money);
    this.balance -= money;
  }

  sufficientFundsCheck(money) {
    if (money > this.balance) {
      throw "Insufficient funds";
    }
  }
}

module.exports = Account;