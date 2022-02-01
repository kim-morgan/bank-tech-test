const Format = require("../src/format");

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2022, 0, 31));
});

describe("Format", () => {
  it("Can render the date in the intended format", () => {
    expect(Format.getCurrentDate()).toBe("31/01/2022");
  });
});