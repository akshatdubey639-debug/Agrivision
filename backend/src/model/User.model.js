const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true,
        unique: true
    },


  

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    avatar: {
        type: String, // Cloudinary URL
        required: false 
    },
  
   phone:{
      type:Number,
      required:true,
      trim:true
   }

});{timeStamp:true}

const User = mongoose.model("User", userSchema);

module.exports = User;