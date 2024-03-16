const mongoose=require("mongoose");

const imgSchema=mongoose.Schema({
    image:{
        type:String
    }
});

const imgModel=mongoose.model("images",imgSchema);
module.exports=imgModel;