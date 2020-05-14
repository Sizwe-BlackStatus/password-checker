// const password = "Covid-19####"
function passwordIsValid(password){
    try {
        if (password === ''){
            throw Error("password should exist")
        }
        if (password.length < 8) {
            throw Error("password should be longer than 8 characters")
        }
        // use regEx
        if (!password.match(/[A-Z]/g)) {
            throw Error("password should be have uppercase")
        }
        if (!password.match(/[a-z]/g)) {
            throw Error("password should be have lowercase")
        }
        if (!password.match(/\d/g)) {
            throw Error("password should have atleast one digit")
        }
        if (!password.match(/.[,!,@,#,$,%,^,&,*,?,_,-,~,(,)]/g)) {
            throw Error("password should have atleast one digit")
        }
    } catch (error)
    {
        console.log(error)
    }
}
function passwordIsOk(password){
    let falseCount = 0
    if (password === ''){
        falseCount += 1
    }
    if (password.length < 8) {
        falseCount += 1
    }
    if (!password.match(/[A-Z]/g)) {
        falseCount += 1
    }
    if (!password.match(/[a-z]/g)) {
        falseCount += 1
    }
    if (!password.match(/\d/g)) {
        falseCount += 1
    }
    if (!password.match(/.[,!,@,#,$,%,^,&,*,?,_,-,~,(,)]/g)) {
        falseCount += 1
    }
    return falseCount
}
// console.log(passwordIsValid("Covid-19####"))
console.log(passwordIsOk("####"))
