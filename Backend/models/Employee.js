const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  gender: { type: String, required: true },
  id: {
    type: String,
    //  enum: ["male", "female", "other"],
    required: false,
  },
  photo: { type: String, required: false },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
