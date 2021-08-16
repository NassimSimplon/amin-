const router = require('express').Router()
 const requireSignin = require('../token/JsonWebToken')
const admin = require('./adminController')
 router.post('/admin/signin',admin.signIn)
 

module.exports = router