const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    studentId: {
      type: Number,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    nationality: {
      type: String,
      required: true
    },
    degreeProgramme: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  
  
module.exports = mongoose.model("Student", StudentSchema, "students")