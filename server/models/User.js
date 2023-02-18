const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    userName: {type:String,required:true},
    email: { type: String, required: true ,unique:true},
    password: { type: String,required: true},
    profilePic:{type:String, default:"https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg"},
    blogs:[{}]
  },
  {timestamps:true}  
);

module.exports=mongoose.model("User" ,UserSchema)