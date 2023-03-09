const jwt=require('jsonwebtoken')
const expressjwt=require('express-jwt')
const express=require('express')
const app =express()
app.use(express.urlencoded())
app.use(express.json())
const secretKey='ithema NO1 <>'
app.post('/api/login',(req,res)=>{
  const userinfo=req.body
  if(userinfo.username!=="admin"||userinfo.password!=='000000'){
    return res.send({status:400,msg:'登录失败'})
  }
  const tokenstr=jwt.sign({username:userinfo.username},secretKey,{expiresIn:'30s'})
  res.send({status:400,msg:'登陆成功',token:tokenstr})
  })
// app.use(expressjwt({secret:secretKey, algorithms: ['HS256']}).unless({path:[/^\/api\//]}))
  app.use(expressjwt.expressjwt({secret: secretKey, algorithms: ['HS256']}).unless({path: [/^\/api\//]}))
  app.get('/admin/getinfo',(req,res)=>{
    console.log(req.auth)
    res.send({
      status:200,
      msg:'获取用户信息成功',
      data: req.auth
    })
  })
app.listen(80,()=>{
  console.log('server running at http://localhost；80')
})