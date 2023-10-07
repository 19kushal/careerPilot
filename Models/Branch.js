const mongoose = require('mongoose');
const branchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    cutOff:{
        type: Number,
        required: true,
    },
    availableSeats:{
        type: Number,
        required: true,
    },
    fees:{
        type: Number,
        required: true,
    },
    scope:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true,
    },
    placedAt:{
        type: String,
        required: true,
    },
  }
  );
module.exports = mongoose.model('Branch', branchSchema);   