const Format = require("../src/format");

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2022, 0, 31));
});

describe("Format", () => {
  it("Can render the date in the intended format", () => {
    expect(Format.formatDate(new Date())).toBe("31/01/2022");
  });
  it("Can format a monetary amount to have two decimal places", () => {
    expect(Format.formatNumber(500)).toBe("500.00");
  });
  it("Can format a withdrawal in the correct manner", () => {
    expect(Format.formatTransaction(new Date(), 500, 200, "withdrawal")).toBe("31/01/2022 || || 500.00 || 200.00");
  });
  it("Can format a deposit in the correct manner", () => {
    expect(Format.formatTransaction(new Date(), 500, 600, "deposit")).toBe("31/01/2022 || 500.00 || || 600.00");
  });
});