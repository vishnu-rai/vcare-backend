const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  locationPinCode: {
    type: Number,
  },
  numberOfDoctors: {
      type: Number
  }
});


const Hospital = mongoose.model("hospital", hospitalSchema);

module.exports = Hospital;
