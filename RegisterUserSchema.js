const mongoose = require('mongoose');

const registerUserSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId,required:true},
    username:{type:String,required:true}
})


exports.model = mongoose.model('RegisterUser', registerUserSchema, 'user_details_table');