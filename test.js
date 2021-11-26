// const emailToValidate = "a@acom";
// const emailRegexp =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// console.log(emailRegexp.test(emailToValidate));

var validator = require("email-validator");
console.log(validator.validate("test@.com"));