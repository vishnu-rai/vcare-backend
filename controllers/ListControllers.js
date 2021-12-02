const { QueryList } = require("twilio/lib/rest/autopilot/v1/assistant/query");
const Appointment = require("../models/Appointment");

module.exports = {
  listAll: async (req, res) => {
    try {
      User.find({}, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listDateWise: async (req, res) => {
    try {
      var query = { appointmentDate: req.body.date };
      User.find(QueryList, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listDoctorWise: async (req, res) => {
    try {
      var query = { doctorId: req.body.doctorId };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listDoctorDateWise: async (req, res) => {
    try {
      var query = {
        doctorId: req.body.doctorId,
        appointmentDate: req.body.date,
      };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listHospitalWise: async (req, res) => {
    try {
      var query = { hospitalId: req.body.hospitalId };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listHospitalDateWise: async (req, res) => {
    try {
      var query = {
        hospitalId: req.body.hospitalId,
        appointmentDate: req.body.date,
      };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listHospitalDoctorWise: async (req, res) => {
    try {
      var query = {
        hospitalId: req.body.hospitalId,
        doctorId: req.body.doctorId,
      };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listHospitalDoctorDateWise: async (req, res) => {
    try {
      var query = {
        hospitalId: req.body.hospitalId,
        doctorId: req.body.doctorId,
        appointmentDate: req.body.date,
      };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listPhoneNumberWise: async (req, res) => {
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
  listUserWise: async (req, res) => {
    try {
      var query = { userId: req.body.userId };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listUserDateWise: async (req, res) => {
    try {
      var query = { userId: req.body.userId, appointmentDate: req.body.date };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
  listPhoneNumberDateWise: async (req, res) => {
    try {
      var query = {
        phoneNumber: req.body.phoneNumber,
        appointmentDate: req.body.date,
      };
      User.find(query, (err, users) => {
        if (err) res.json({ status: "Failed", error: err });
        else res.json({ status: "OK", Users: users });
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
};
