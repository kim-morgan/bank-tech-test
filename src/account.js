class Account  {

  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
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