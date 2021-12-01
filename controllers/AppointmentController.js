const Appointment = require("../models/Appointment");


module.exports.bookAppointment = async (req, res) => {
    const userId = req.body.userId;
    const appointmentId = req.body.appointmentId;
    const hospitalId = req.body.hospitalId;
    const doctorId = req.body.doctorId;
    const department = req.body.department;
    const appointmentDate = req.body.appointmentDate;
    const appointmentNumber = req.body.appointmentNumber;
    const verificationStatus = 0;
    try {
        // userId, hospitalId, doctorId these are foreign key so we can't add them directly
        //const appointmentObj = await Appointment.create({}); 
    }
    catch {
        
    }
};