const express = require("express");
const router = express.Router();
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);
const emailvalidator = require("email-validator");

router.get("/otp/email/send", (req, res) => {
  if (!emailvalidator.validate(req.query.email)) {
    console.log("Invalid email address.");
    res.status(400).send({
      message: "Invalid email address :!",
      email: req.query.email,
    });
  } else {
    client.verify
      .services(process.env.EMAIL_SERVICE_ID)
      .verifications.create({ to: req.query.email, channel: "email" })
      .then((data) => {
        console.log("Otp sent to email.");
        res.status(200).send({
          message: "Verification code is sent!!",
          email: req.query.email,
          data,
        });
      });
  }
});

module.exports = router;
