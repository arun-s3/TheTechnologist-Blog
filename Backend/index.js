import express from 'express'
const app = express()
import userRoutes from './Routes/userRoutes.js'
import adminRoutes from './Routes/adminRoutes.js'

import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGOURI)
mongoose.connection.on('connected',()=>{console.log("Connected to database..")})
mongoose.connection.on('error',()=>{console.log("Error during the connection..")})
mongoose.connection.on('disconnected',()=>{console.log("Disconnected from the database..")})

app.use(express.json())

app.use('/',userRoutes)
app.use('/admin',adminRoutes)


app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})