const mongoose=require("mongoose");

const StudentSchema=new mongoose.Schema({

name:String,

rollNo:Number,

department:String

});

module.exports=mongoose.model("Student",StudentSchema);