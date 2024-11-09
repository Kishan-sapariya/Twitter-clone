import mongoose from "mongoose";

const notificationSchema=new mongoose.Schema({
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    type:{
        type:String,
        required:true,
        enum:["like","follow"]
    },
    read:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const notification=mongoose.model("notification",notificationSchema);

export default notification;