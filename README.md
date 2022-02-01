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