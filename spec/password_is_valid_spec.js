const { passwordIsValid } = require("../src/password_checker.js");
describe("Password Validation", function () {
  it("password should exist", function () {
    expect(function () {
      passwordIsValid("");
    }).toThrow(new Error("password should exist"));
  });
  it("password should be longer than 8 characters", function () {
    expect(function () {
      passwordIsValid("covid");
    }).toThrow(new Error("password should be longer than 8 characters"));
  });
  it("password should have a uppercase characters", function () {
    expect(function () {
      passwordIsValid("covid19*a");
    }).toThrow(new Error("password should have uppercase"));
  });
  it("password should have lowercase characters", function () {
    expect(function () {
      passwordIsValid("COVID19*A");
    }).toThrow(new Error("password should have lowercase"));
  });
  it("password should have a digit", function () {
    expect(function () {
      passwordIsValid("COVID-aaA");
    }).toThrow(new Error("password should have atleast one digit"));
  });
  it("password should have a special char", function () {
    expect(function () {
      passwordIsValid("Covid0199");
    }).toThrow(new Error("password should have atleast one special character"));
  });
});
