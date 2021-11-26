const express = require("express");
const router = express.Router();
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);
const emailvalidator = require("email-validator");

router.get("/otp/email/verify", (req, res) => {
  if (req.query.email && req.query.code.length === 4) {
    client.verify
      .services(process.env.EMAIL_SERVICE_ID)
      .verificationChecks.create({
        to: req.query.email,
        code: req.query.code,
      })
      .then((data) => {
        if (data.status === "approved") {
          res.status(200).send({
            message: "User is Verified!!",
            data,
          });
        }
      });
  } else {
    res.status(400).send({
      message: "Wrong email or code :(",
      phonenumber: req.query.email,
      data,
    });
  }
});

module.exports = router;
