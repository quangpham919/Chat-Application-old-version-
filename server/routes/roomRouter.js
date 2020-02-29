const express = require('express');
const room = require('../models/room');

const router = express.Router();

//Event 
// get all event 
router.route("/all").get((req,res)=>{
  room.find((err,rooms)=>{
    if(err){return err;}
    else { 
      res.json(rooms);
    }
  })
})

// create a event 
router.route("/add").post((req,res)=>{
    let room_to_add = new room(req.body);

    room_to_add.save().then((room) => {
        return res.status(200).json({'room':' room added successfully'});
    }).catch((err) => {
        res.status(400).send("Failed to create an room");
    });
})

// delete a room 
router.route("/delete/:id").post((req,res)=>{
    room.findByIdAndDelete({_id:req.params.id},(err,room)=>{
        if (err)
        {res.json(err);}
        else {
          res.json("Room removed successfully");
        }
    })
})

module.exports = router;