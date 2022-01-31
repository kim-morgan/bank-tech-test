const AccountRecord = require("../src/account_record");

let dateClassMock = {
  getFullYear() {
    return 2022;
  },
  getMonth() {
    return 0;
  },
  getDate() {
    return 31;
  }
}

describe("AccountRecord", () => {
  it("Can print a statement, initializing with just the blank header", () => {
    let record = new AccountRecord();
    expect(record.printStatement()).toBe("date || credit || debit || balance");
  })
  it("Can render the date in the intended format", () => {
    let record = new AccountRecord();
    console.log(record.getCurrentDate(dateClassMock));
    expect(record.getCurrentDate(dateClassMock)).toBe("31/01/2022");
  })
})