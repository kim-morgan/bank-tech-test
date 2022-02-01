# Bank Tech Test

## Overview

A simple program that can be run in node to record transactions in a bank account and print out a statement.

### Features

* Deposits, withdrawal
* Account statement (date, amount, balance) printing
* Data is kept in memory

### Technologies used
* Javascript
* Node
* Jest
* Eslint

## Instructions

### Setup
Clone this repository, then run `npm install`

### Usage
To launch, run the following commands:
```
cd src
node
.load account.js
account = new Account();
```

To make a deposit, run the following, entering the amount you would like to deposit as the parameter.
```
account.deposit(amount);
```

To make a withdrawal, run the following, entering the amount you would like to withdraw as the parameter.
```
account.withdraw(amount);
```

To see your statement, run:
```
account.statement();
```

### Notes
* Withdrawals and deposits must be at least 0.01
* The user must have sufficient funds to make a withdrawal
* Unsuccessful transactions (below minimum amount/insufficient funds for withdrawal) will not be recorded on the statement

## Demonstration
![Screenshot of programme](https://github.com/kim-morgan/bank-tech-test/blob/main/images/screenshot-bank-test.png?raw=true)

## Approach

My approach was to use three classes Account, AccountRecord, Format
* Account: This is the interface through which the user can withdraw, deposit, and see their statement printed to the terminal. I chose to make this the main interface as it seems the most intuitive for the user, as can be seen in the instructions above.
* AccountRecord: This keeps a record of all transactions made through the Account class, which are formatted in via the Format class.
* Format: Formats all dates, numbers, and statement lines into the desired appearance. I chose to make this a separate class based on the principles of separation of concerns.