const express = require('express');
const router = express.Router();
const Rental = require('../model/rental.model');
const  Userctrl =require('../controllers/user.controller');



router.get('/secret',Userctrl.authMiddleware,function(req,res){
  res.json({"secret":true});

});


//get All Rental details.
router.get('',function (req,res) {
  Rental.find({},function (err,foundRentals) {
    res.json(foundRentals);
  })
});

// get rental details by Id.
router.get('/:id',function (req,res) {
  const rentalId = req.params.id;

  Rental.findById(rentalId,function (err,foundRentals) {
    
    if (err){
      res.status(422).send({errors: [{title:'Rental Error', detail: 'Could not find Rental'}]})
    }
    res.json(foundRentals);
    
  })
  
})

module.exports = router;


