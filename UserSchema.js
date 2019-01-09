const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    firstName:  {type:String,required:true},
    lastName:  {type:String,required:true},
    contactNumber:  {type:String,required:true},
    emailId: {type:String,required:true},
    isActive:{type:Boolean,required:true}
})

exports.model = mongoose.model('User', userSchema, 'user_details_table');