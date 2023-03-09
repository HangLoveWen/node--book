const express=require('express')
const userinfo=require('../routerHandler/userinfo')
const router=express.Router()
router.get('/userinfo',userinfo.getUserinfo)
module.exports=router