const { passwordIsOk } = require("../src/password_checker.js");
describe("Password is ok", function () {
  it("should check if atleast 3 conditions are met", function () {
    expect(passwordIsOk("covid19***")).toBe(true);
  });
  it("should check if condition 1 is met", function () {
    expect(passwordIsOk("")).toBe(false);
  });
  it("should check if condition 2 is met", function () {
    expect(passwordIsOk("Covid19")).toBe(false);
  });
});
