const express=require('express')
const router=express.Router()
const routerhandler=require('../routerHandler')
const expressJoi=require('@escook/express-joi')
const {reg_login_schema}=require('../schema')
//注册
router.post('/reguser',expressJoi(reg_login_schema),routerhandler.reguser)
//登录
router.post('/login',expressJoi(reg_login_schema),routerhandler.login)
module.exports=router