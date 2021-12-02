const User = require("../models/User");

module.exports = {
  userSignUp: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const result = await newUser.save();
      res.json({ status: "OK", userId: result.userId });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userSignIn: async (req, res) => {},

  userListAll: async (req, res) => {
    try {
      User.find({}, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userListSamePhoneNumber: async (req, res) => {
    try {
      var query = { phoneNumber: req.body.phoneNumber };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userUpdateAddress: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      var newValue = { $set: { address: req.body.address } };
      User.updateOne(query, newValue, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (users.matchedCount == 0) res.json({ status: "Invalid user" });
          else res.json({ status: "OK", Users: users });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userUpdateCity: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      var newValue = { $set: { city: req.body.address } };
      User.updateOne(query, newValue, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (users.matchedCount == 0) res.json({ status: "Invalid user" });
          else res.json({ status: "OK", Users: users });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userUpdatePinCode: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      var newValue = { $set: { locationPinCode: req.body.address } };
      User.updateOne(query, newValue, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (users.matchedCount == 0) res.json({ status: "Invalid user" });
          else res.json({ status: "OK", Users: users });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userUpdateBloodGroup: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      var newValue = { $set: { bloodGroup: req.body.bloodGroup } };
      User.updateOne(query, newValue, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (users.matchedCount == 0) res.json({ status: "Invalid user" });
          else res.json({ status: "OK", Users: users });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userUpdateEmailId: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      var newValue = { $set: { email: req.body.emailId } };
      User.updateOne(query, newValue, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (users.matchedCount == 0) res.json({ status: "Invalid user" });
          else res.json({ status: "OK", Users: users });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userUpdatePassword: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      var newValue = { $set: { password: req.body.password } };
      User.updateOne(query, newValue, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (users.matchedCount == 0) res.json({ status: "Invalid user" });
          else res.json({ status: "OK", Users: users });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  userUpdatePhoneNumber: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      var newValue = { $set: { phoneNumber: req.body.phoneNumber } };
      User.updateOne(query, newValue, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (users.matchedCount == 0) res.json({ status: "Invalid user" });
          else res.json({ status: "OK", Users: users });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
};
