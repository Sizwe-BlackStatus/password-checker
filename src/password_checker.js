function passwordIsValid(password) {
  if (password === "") {
    throw new Error("password should exist");
  }
  if (!/.{8,}/g.test(password)) {
    throw new Error("password should be longer than 8 characters");
  }
  if (!password.match(/[A-Z]/g)) {
    throw new Error("password should have uppercase");
  }
  if (!password.match(/[a-z]/g)) {
    throw new Error("password should have lowercase");
  }
  if (!password.match(/\d/g)) {
    throw new Error("password should have atleast one digit");
  }
  if (!password.match(/.[,!,@,#,$,%,^,&,*,?,_,-,~,(,)]/g)) {
    throw new Error("password should have atleast one special character");
  }
}
function passwordIsOk(password) {
  let conditionsMet = 0;
  const password_is_ok = false;
  if (password != "") {
    conditionsMet += 1;
  }
  if (/.{8,}/g.test(password)) {
    conditionsMet += 1;
  }
  if (password.match(/[A-Z]/g)) {
    conditionsMet += 1;
  }
  if (password.match(/[a-z]/g)) {
    conditionsMet += 1;
  }
  if (password.match(/\d/g)) {
    conditionsMet += 1;
  }
  if (password.match(/.[,!,@,#,$,%,^,&,*,?,_,-,~,(,)]/g)) {
    conditionsMet += 1;
  }
  if (password == "" || /.{8,}/g.test(password) == false) {
    return password_is_ok;
  }
  if (conditionsMet >= 3) {
    conditionsMet = true;
  } else {
    conditionsMet = false;
  }
  return conditionsMet;
}
module.exports = { passwordIsValid, passwordIsOk };
