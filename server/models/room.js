const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = new Schema({
    name : {
        type: String,
        required: true
    }
    
},
{
timestamps:true
});

let Room  = mongoose.model("Room",room);
module.exports = Room;