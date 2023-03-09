//路由模块.js
const express=require('express')
const router=express.Router()
router.get('/user/:id/:name',(req,res)=>{
  // console.log(res.query)
  //   res.send(req.query)
    res.send(req.params)
})
router.post('/user:id',(req,res)=>{
    res.send('I am post')
})
module.exports=router