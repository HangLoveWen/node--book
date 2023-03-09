const express=require('express')
const cors=require('cors')
const expressjwt=require('express-jwt')
const secretKey=require('./jwt')
const joi=require('joi')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(expressjwt({secret:secretKey.jwtSecretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))
app.use(cors())
app.use((req,res,next)=>{
  //status默认值为1,err是否为错误的字符串
  res.cc=(err,status=1)=>{
    res.send({
      status:status,
      msg:err instanceof Error ?err.message :err
    })
  }
  next()
})
const router=require('./router')
app.use('/api',router)
const userinfoRouter=require('./router/userinfo')
app.use('/my',userinfoRouter)
app.use((err,req,res,next)=>{
  if(err instanceof joi.ValidationError) return res.cc(err)
  if(err.name==='UnauthorizedError') return res.cc(err)
  res.cc(err)
})
app.listen(80,()=>{
  console.log('serve running at http://localhost:80')
})