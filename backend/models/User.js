import mongoose from "mongoose";
import Booking from "./Bookings";

const Schema=mongoose.Schema;
const userSchema= new mongoose.Schema(

    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
        bookings:[{
            type:mongoose.Types.ObjectId,
            ref:"Booking",
        }] 
    });

    export default mongoose.model("user",userSchema);

    //users
