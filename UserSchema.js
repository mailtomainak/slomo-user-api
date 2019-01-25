const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    firstName:  {type:String,required:true},
    lastName:  {type:String,required:true},
    phone:  {type:String,required:true},
    emailId: {type:String},
    isActive:{type:Boolean},
    acceptTerms:{type:Boolean,required:true},
    isComplete:{type:Boolean},
    isNewRegistration:{type:Boolean}
})

exports.model = mongoose.model('User', userSchema, 'user_details_table');