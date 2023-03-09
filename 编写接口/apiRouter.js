const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const router=express.Router()
router.get('/get',(req,res)=>{
  const query=req.query
  res.send({
    status:0,
    message:'Get请求成功',
    data:query
  })
})
router.post('/post',(req,res)=>{
  const body=req.body
  res.send({
    status:0,
    message:'Post请求成功',
    data:body
  })
})
module.exports=router