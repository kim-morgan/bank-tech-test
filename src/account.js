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
    if (money > this.balance) {
      throw "Insufficient funds";
    }
    this.balance -= money;
  }
}

module.exports = Account;