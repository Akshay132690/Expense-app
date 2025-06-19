const express=require('express')
const { loginController, registerController } = require('../controllers/userController')


// router object

const router=express.Router()

//router
//POST || login user
router.post('/login',loginController)


//Post || register user

router.post('/register',registerController)
module.exports=router