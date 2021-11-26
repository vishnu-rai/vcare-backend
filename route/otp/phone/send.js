const express = require("express");
const router = express.Router();
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

router.get("/otp/phone/send", (req, res) => {
  if (req.query.phonenumber) {
    client.verify
      .services(process.env.SERVICE_ID)
      .verifications.create({
        to: `+${req.query.phonenumber}`,
        channel: "sms",
      })
      .then((data) => {
        res.status(200).send({
          message: "Verification is sent!!",
          phonenumber: req.query.phonenumber,
          data,
        });
      });
  } else {
    res.status(400).send({
      message: "Wrong phone number :(",
      phonenumber: req.query.phonenumber,
      data,
    });
  }
});

module.exports = router;
