const express = require('express');
const mongoose = require('mongoose');
const confiq = require('./config/dev.js');
const Rental = require('./model/rental');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rental');

mongoose.connect(confiq.DB_URI).then(()=>{
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});
const app = express();

app.use('/api/v1/rentals',rentalRoutes);

// app.get('/rentals',function (req,res) {
//   res.json({'success':true});
//
// })

const PORT = process.env.PORT || 3001;


app.listen(PORT,function () {
  console.log("I am running");
  
})
