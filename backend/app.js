// const express=require("express");
//user==Kunal_pandit
//pass==ZTC80Cnk6fl7q3LH (cluster)
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingRouter from "./routes/booking-routes";

dotenv.config();
const app=express();
import cors from "cors";
app.use(cors());
//middlewares
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingRouter);

mongoose.connect(
    `mongodb+srv://admin:${process.env.Mongodb_password}@cluster0.axgh4od.mongodb.net/?retryWrites=true&w=majority`
    ).then(()=>{
        app.listen(5000,()=>{
            console.log("connected to database and server is running ");
        })
    }).catch((e)=>{
        console.log(e);
    });

