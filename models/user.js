const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:250
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:250
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:250
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User',UserSchema);