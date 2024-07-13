import User from '../models/userModel.js'
import brcyptjs from 'bcryptjs'

const securepassword = async(password)=>{
    try{
        return await brcyptjs.hash(password,10)
    }
    catch(error){
        console.log(error)
    }
}

export const signupAdmin = async(req,res)=>{
    try{
        const {username, password, email} = req.body
        if(!username|| !password|| !email){
            return res.status(400).json({message:"All fields are requied!"})
        }
        const hashedPassword = await securepassword(password)

        const newUser = new User({
            username,
            password:hashedPassword,
            email
        })
        const userData = await newUser.save()
        if(!userData){
            return res.status(500).json({message:"Error saving the user"})
        }
        else{
            res.status(200).json({message:"Signup Successful!"})
        }
    }
    catch(error){
        console.log(error)
    }
}

