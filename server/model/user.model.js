const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: [32,'Too Long, Max is 32 characters'],
    min:['Too Short, Min is 4 characters']
  },
  email:{
    type: String,
    required: 'Email is required',
    lowercase: true,
    max: [32,'Too Long, Max is 32 Characters'],
    min: [4,'Too Short, Min is 4 Characters'],
    unique: true,
    match: '/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/'
  },
  password:{
    type: String,
    required:true,
    min:[4,'Too Short, Min is 4 Characters'],
    max:[32,'Too Long, Max is 32 Characters'],
  },
  rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}]
});

module.exports = mongoose.model('User', userSchema);
