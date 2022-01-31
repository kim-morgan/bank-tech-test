const AccountRecord = require("../src/account_record");

describe("AccountRecord", () => {
  it("Can print a statement, initializing with just the blank header", () => {
    let record = new AccountRecord();
    expect(record.printStatement()).toBe("date || credit || debit || balance");
  })
})