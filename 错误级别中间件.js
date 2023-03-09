const express=require('express')
const app=express()
app.get('/',(req,res)=>{
  throw new Error("error loading")
  res.send('Home page')
})
app.use((err,req,res,next)=>{
  console.log('发生了错误：'+err.message)
  res.send('Error'+err.message)
})
app.use(express.json())
app.use(express.urlencoded({extend:false}))
//通过express.urlencoded()这个中间件，不解析表单中的url-encoded格式的数据，
//extended:false的意思是：不使用第三方的解析方式，只使用自身的解析方式；如果是true就使用第三方解析方式
app.post('/user',(req,res)=>{
  //服务器可以通过req.body来接收客服端发送过来的请求体数据
  //默认情况下，如果不配置解析表单数据的中间件，则默认为req.body为null
  res.send(req.body)
})
app.post('/book',(req,res)=>{
  //服务器可以通过req.body来接收客服端发送过来的请求体数据
  //默认情况下，如果不配置解析表单数据的中间件，则默认为req.body为null
  res.send(req.body)
})
app.listen(80,()=>{
  console.log('Server running at http://localhost:80')
})