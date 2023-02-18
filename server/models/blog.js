const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema(
  {
    // authorname: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    authername: { type: String, required: true },
    authorimage: { type: String, default:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" },
    title: { type: String, required: true },
    brief: { type: String, required: true },
    description: { type: String,required: true},
    tag: { type: String, required: true },
    image:{ type: String, require:true}
  },
  {timestamps:true}  
);

module.exports=mongoose.model("Blog" ,BlogSchema)