const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const history = new Schema(
  {
    message : { 
      type : String
    },
    sender :{
      type:String,
      required:true,
      },
    roomname : {
      type:String,
      required: true,
    }
    },
    {
    timestamps:true
  });

let History = mongoose.model('History', history);
module.exports = History;