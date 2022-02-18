const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 6,
        max : 255
    },
    email : {
        type : String,
        required : true,
        min : 6,
        max : 255
    },
    password : {
        type : String, 
        required : true,
        min : 6,
        max : 255
    },
    date : {
        type : String,
        default : Date.now(),
    }
});

module.exports = mongoose.model("users",userSchema);