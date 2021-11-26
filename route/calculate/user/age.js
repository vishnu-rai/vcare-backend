const express = require("express");
const router = express.Router();

var MILLISECONDS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365;

function get_age(time) {
  var date_array = time.split("-");
  var years_elapsed =
    (new Date() - new Date(date_array[0], date_array[1], date_array[2])) /
    MILLISECONDS_IN_A_YEAR;
  return parseInt(years_elapsed);
}

router.post("/calculate/user/age", (req, res) => {
  res.json({ age: get_age(req.body.dateOfBirth) });
});

module.exports = router;
