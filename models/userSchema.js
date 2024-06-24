const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        require:true

    },
    address:{
        type:String,
        require:true

    },
    textarea:{
        type:String,
        require:true
    }
})


const User = new mongoose.model("User", userSchema);

module.exports = User;