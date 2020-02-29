const express = require('express');
const history = require('../models/history');

const router = express.Router();

//get all record
router.route('/all').get((req,res)=>{
  history.find((err,histories)=>{
    
      if(err){return err;}

      else {res.json(histories);}
  });
});

//get records by room
router.route('/roomhistory/:room').get((req,res)=>{
   history.find(({roomname:req.params.room}),(err,histories)=>{
        if(err){return err;}
        else {res.json(histories);}
   });
  });


// save record 
router.route('/add').post((req,res)=>{
    let record = new History(req.body);
    record.save().then((record) => {
      res.status(200).json({'record':'Record added succesfully'});
    }).catch((err) => {
      res.status(400).send("Failed to create a new record");
    });
});


module.exports = router;
