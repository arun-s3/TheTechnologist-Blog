import express from 'express'
const router = express.Router()

import {signupAdmin} from '../Controllers/adminController.js'

router.post('/signup', signupAdmin)


export default router