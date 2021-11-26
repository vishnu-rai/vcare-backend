// const emailToValidate = "a@acom";
// const emailRegexp =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// console.log(emailRegexp.test(emailToValidate));

// var validator = require("email-validator");
// console.log(validator.validate("test@.com"));

var MILLISECONDS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365;
function get_age(time) {
  var date_array = time.split("-");
  var years_elapsed =
    (new Date() - new Date(date_array[0], date_array[1], date_array[2])) /
    MILLISECONDS_IN_A_YEAR;
  return parseInt(years_elapsed);
}

console.log(get_age("1999-09-01"));
