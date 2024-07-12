import express from 'express'
const router = express.Router()
import {} from '../Controllers/userController'

router.get('/test', async(req,res)=>{res.send("Hello")})

export default router