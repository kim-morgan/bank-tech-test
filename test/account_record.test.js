const AccountRecord = require("../src/account_record");

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2022, 0, 31));
});

let accountClassMock = {
  deposit() { },
  withdraw() { },
  getBalance() { return 500 }
}

let record = new AccountRecord();

describe("AccountRecord", () => {
  it("Can print a statement, initializing with just the blank header", () => {
    expect(record.printStatement()).toBe("date || credit || debit || balance");
  });
  it("Can render the date in the intended format", () => {
    expect(record.getCurrentDate()).toBe("31/01/2022");
  });
  it("Can record a credit transaction and show it on the statement", () => {
    record.recordDeposit(500);
    expect(record.printStatement()).toBe("date || credit || debit || balance\n31/01/2022 || 500.00 || || 500.00");
  });
  it("Can record a withdrawal and show it on the statement", () => {
    record.recordWithdrawal(250);
    expect(record.printStatement()).toBe("date || credit || debit || balance\n31/01/2022 || 500.00 || || 500.00\n31/01/2022 || || 250.00 || 250.00");
  })
})