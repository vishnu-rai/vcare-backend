const Appointment = require("../models/Appointment");

module.exports = {
  bookAppointment: async (req, res) => {
    try {
      const newAppointment = new Appointment(req.body);
      const result = await newAppointment.save();
      res.json({ status: "OK", result: result });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  updateAppointment: async (req, res) => {
    try {
      const appointmentId = req.body.appointmentId;
      const hospitalId = req.body.hospitalId;
      var newStatus = {
        $set: { verificationStatus: req.body.verificationStatus },
      };
      var query = { appointmentId: appointmentId, hospitalId: hospitalId };
      Appointment.updateOne(query, newStatus, (err, result) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (result.matchedCount == 0) res.json({ status: "Invalid request" });
          else res.json({ status: "OK", update: result });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },

  deleteAppointment: async (req, res) => {
    try {
      const appointmentId = req.body.appointmentId;
      const hospitalId = req.body.hospitalId;
      var newStatus = {
        $set: { verificationStatus: req.body.verificationStatus },
      };
      var query = { appointmentId: appointmentId, hospitalId: hospitalId };
      Appointment.updateOne(query, newStatus, (err, result) => {
        if (err) res.json({ status: "Failed", error: err });
        else {
          if (result.matchedCount == 0) res.json({ status: "Invalid request" });
          else res.json({ status: "OK", update: result });
        }
      });
    } catch (error) {
      res.json({ status: "Failed", error: error });
    }
  },
};
