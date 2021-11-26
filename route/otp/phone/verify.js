const express = require("express");
const router = express.Router();
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

router.get("/otp/phone/verify", (req, res) => {
  if (req.query.phonenumber && req.query.code.length === 4) {
    client.verify
      .services(process.env.SERVICE_ID)
      .verificationChecks.create({
        to: `+${req.query.phonenumber}`,
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
      message: "Wrong phone number or code :(",
      phonenumber: req.query.phonenumber,
      data,
    });
  }
});

module.exports = router;
