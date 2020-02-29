const express = require('express');
const event = require('../models/event');

const router = express.Router();

//Event 
// get all event 
router.route("/all").get((req,res)=>{
  event.find((err,events)=>{
    if(err){return err;}
    else { 
      res.json(events);
    }
  })
})

// create a event 
router.route("/add").post((req,res)=>{
    let event_to_add = new event(req.body);

    event_to_add.save()
    .then(event => {
        return res.status(200).json({'event':' event added successfully'});
    })
    .catch(err => {
        res.status(400).send("Failed to add an event");
    });
})

module.exports = router;