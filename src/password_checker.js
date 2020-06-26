function passwordIsValid(password) {
  if (password === "") {
    throw new Error("password should exist");
  }
  if (!/.{9,}/g.test(password)) {
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
  if (!password.match(/\W|_+/g)) {
    throw new Error("password should have atleast one special character");
  }
  else{
    return ("")
  }
}
console.log(passwordIsValid("Covid-19***"))
function passwordIsOk(password) {
  let conditionsMet = 0;
  const password_is_ok = false;
  if (password != "") {
    conditionsMet += 1;
  }
  if (/.{9,}/g.test(password)) {
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
  if (password.match(/\W|_+/g)) {
    conditionsMet += 1;
  }
  if (password == "" || /.{9,}/g.test(password) == false) {
    return password_is_ok;
  }
  if (conditionsMet >= 3) {
    conditionsMet = true;
  } else {
    conditionsMet = false;
  }
  return conditionsMet;
}
console.log(passwordIsOk("Covid-19***"))
module.exports = { passwordIsValid, passwordIsOk };
