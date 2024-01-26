const mongoose = require("mongoose");
// const User = require('./UserModel/user')

const doubtFormSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  classGrade: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  language:{
    type: String,
    required: true
  },
  assigned:{
    type: Boolean,
    default: false
  },
  time:{
    type: Date,
    default: Date.now
  },
  resolved:{
    type: Boolean,
    default: false
  }
});

module.exports=mongoose.model('doubtForm', doubtFormSchema)
