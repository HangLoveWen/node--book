const session=require('express-session')
const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
  secret:'acd',
  resave:false,
  saveUninitialized:true,
}
))
app.post('/login',(req,res)=>{
  if(req.body.username!=="admin"||req.body.password!=='000000'){
    return res.send({status:1,msg:'登录失败'})
  }
  req.session.user=req.body
  req.session.islogin=true
  res.send({status:0,msg:'登陆成功'})
})
app.get('/username',(req,res)=>{
  if(req.session.islogin!=true){
    return res.send({status:1,msg:'session获取失败'})
  }
  res.send({status:0,msg:req.session.user.username})
})
app.post('/logout',(req,res)=>{
  req.session.destroy()
  res.send({status:0,masg:'退出成功！'})
})
app.listen(80,()=>{
  console.log('seer running on http://localhost:80')
})