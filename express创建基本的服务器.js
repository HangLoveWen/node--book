const express=require('express')
const app=express()
app.use('/clock',express.static('./clock'))
app.get('/user/:id/:name',(req,res)=>{
  // console.log(res.query)
  //   res.send(req.query)
    res.send(req.params)
})
app.post('/user:id',(req,res)=>{
    res.send('I am post')
})
app.listen(80,()=>{
  console.log('server running at http://127.0.0.1')
})