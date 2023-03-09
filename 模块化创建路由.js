//服务器注册路由
const express=require('express')
const app=express()
const router=require('./路由模块')
const m1=function(req,res,next) {
  console.log('第一个局部生效的中间件')
  next()
}
const m2=function(req,res,next) {
  console.log('第二个局部生效的中间件')
  next()
}
app.use((req,res,next)=>{
  const time=Date.now()
  req.starttime=time
  console.log('第一个中间件')
  next()
})
app.use((req,res,next)=>{
  console.log('第二个中间件')
  next()
})
// app.use('/api',router)
app.get('/',[m1,m2],(req,res)=>{
  res.send('服务器启动于：'+req.starttime)
})
app.post('/user',(req,res)=>{
  res.send('服务器启动于：'+req.starttime)
})
app.listen(80,()=>{
  console.log('server running on https://127.0.0.1')
})
