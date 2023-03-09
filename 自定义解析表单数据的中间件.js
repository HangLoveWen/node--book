const express=require('express')
const app=express()
const custom=require('./bodyparser')
// const qs=require('querystring')
app.use(custom)
// app.use((req,res,next)=>{
//   // 定义一个字符串，专门用来存储客户端发送的请求体数据
//   let str=''
//   // 监听req的data事件
//   req.on('data',(chunk)=>[
//     str+=chunk
//   ])
//   req.on('end',()=>{
//     const body=qs.parse(str)
//     req.body=body
//     console.log(req.body)
//     next()
//   })

// })
app.post('/user',(req,res)=>{
  res.send(req.body)
})
app.listen(80,()=>{
  console.log('server running at http://localhost:80')
})