const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PortsSchema = new Schema({
  rank: {
    type: Number,
    required: true
  },
  targetport: {
    type: Number,
    required: true
  },
  records: {
    type: Number,
    required: true
  },
  targets: {
    type: Number,
    required: true
  },
  sources: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ports = mongoose.model("ports", PortsSchema);
