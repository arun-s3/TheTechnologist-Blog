import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO-URI,{useNewParser:true, useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{console.log("Connected to database..")})
mongoose.connection.on('error',()=>{console.log("Error during the connection..")})
mongoose.connection.on('disconnected',()=>{console.log("Disconnected from the database..")})




app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})