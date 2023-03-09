const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post('/user',(req,res)=>{
  console.log(req.body)
  res.send(req.body)
})
app.listen(80,()=>{
  console.log('server running at http://localhost:80')
})