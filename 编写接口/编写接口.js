const express=require('express')
const router=require('./apiRouter')
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use('/api',router)
app.listen(80,()=>{
  console.log("server runing at http://localhost:80")
})