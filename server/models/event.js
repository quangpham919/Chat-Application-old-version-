const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    username : {
      type: String,
      required: true
    },
    event_name : {
      type: String,
      required: true
    },
    room: {
      type: String,
      required: true
    },
})

let event = mongoose.model("Event",Event);

module.exports = event;