const AccountRecord = require("../src/account_record");

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2022, 0, 31));
});

const getBalanceMock = jest.fn();
getBalanceMock.mockReturnValueOnce(500).mockReturnValueOnce(250);

const depositMock = jest.fn();
const withdrawMock = jest.fn();

let accountClassMock = {
  deposit: depositMock,
  withdraw: withdrawMock,
  getBalance: getBalanceMock
}

let record = new AccountRecord(accountClassMock);

describe("AccountRecord", () => {
  it("Can print a statement, initializing with just the blank header", () => {
    expect(record.printStatement()).toBe("date || credit || debit || balance");
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