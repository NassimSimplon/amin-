const router = require('express').Router()
const  user = require('../controller/userController')
const {requireSignin} = require('../token/JsonWebToken')
 



router.post('/register',user.register)
router.post('/signin',user.signIn)
  
module.exports = router