import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import router from "../Routes/FeedbackRoutes.js";



const app=express();

const PORT=3000  || process.env.PORT;

app.use(express.json())

app.use("/api/v1",router)

dotenv.config();



dbConnect();



app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
})
