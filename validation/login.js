const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports =  function validateLoginInput(data) {
    let errors = {}

    email = !isEmpty(data.email) ? data.email : ""
    password = !isEmpty(data.password) ? data.password : ""

    
    if (Validator.isEmpty(email)) {
        errors.email = "E-mail field is required";
    } else if (!Validator.isEmail(email)) {
        errors.email = "E-mail is invalid";
    }

    if (Validator.isEmpty(password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

