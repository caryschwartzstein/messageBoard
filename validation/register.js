const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {}

    name = !isEmpty(data.name) ? data.name : ""
    email = !isEmpty(data.email) ? data.email : ""
    password = !isEmpty(data.password) ? data.password : ""
    password2 = !isEmpty(data.password2) ? data.password2 : ""

    if (Validator.isEmpty(name)) {
        errors.name = "Name field is required";
    }
    
    if (Validator.isEmpty(email)) {
        errors.email = "E-mail field is required";
    } else if (!Validator.isEmail(email)) {
        errors.email = "E-mail is invalid";
    }

    if (Validator.isEmpty(password)) {
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(password2)) {
        errors.password2 = "Confirm password field is required";
    }

    if (!Validator.isLength(password, { min: 6, max: 30 })) {
        errors.password = "Password must be betwen 6 and 30 characters"
    }

    if (!Validator.equals(password, password2)) {
        errors.password2 = "Passwords must match"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

