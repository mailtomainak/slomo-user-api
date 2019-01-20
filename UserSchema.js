const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    firstName:  {type:String,required:true},
    lastName:  {type:String,required:true},
    contactNumber:  {type:String,required:true},
    emailId: {type:String},
    isActive:{type:Boolean},
   'acceptedT&C':{type:Boolean,required:true},
    isComplete:{type:Boolean}
})

exports.model = mongoose.model('User', userSchema, 'user_details_table');