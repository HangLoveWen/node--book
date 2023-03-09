//导入数据库操作模块
const jwt=require('jsonwebtoken')
const bcryptjs=require('bcryptjs')
const db=require('../mysql')
const secretKey=require('../jwt')
exports.reguser=(req,res)=>{
  const userinfo=req.body
  //对表单中的数据进行合法性的校验
  // if(!userinfo.username||!userinfo.password){
  //   // return res.send({status:1,msg:'注册失败，用户名或密码输入不合法，请重新输入'})
  //   return res.cc('注册失败，用户名或密码输入不合法，请重新输入')
  // }
  //定义sql查询工具，检测用户名是否被占用
  const sql='select * from ev_users where username=?'
  db.query(sql,userinfo.username,(err,results)=>{
  if(err){
    // return res.send({status:1,msg:err.message})
    return res.cc(err)
  }
  //判断用户名是否被占用
  if(results.length>0){
    // return res.send({status:1,msg:'用户名被占用'})
    // return res.cc('用户名被占用')
    return res.cc('用户名被占用')
  }
})
//对用户密码进行加密，返回的是加密之后的的字符串
userinfo.password=bcryptjs.hashSync(userinfo.password,10)
  //  res.send('reguser ok')
  //定义插入工具，将用户信息插入数据库中
  const sqlstr='insert into ev_users set ?'
  db.query(sqlstr,{username:userinfo.username,password:userinfo.password},(err,results)=>{
    if(err){
      // return res.send({status:1,msg:err.message})
      return res.cc(err)
    }
    if(results.affectedRows!==1){
      // return res.send({status:1,msg:"用户注册失败"})
      return res.cc("用户注册失败")
    }
    //  res.send({status:0,msge:'用户注册成功'})
    res.cc('用户注册成功',0)
  })
}
exports.login=(req,res)=>{
    const userinfo=req.body
    const sql='select * from ev_users where username=?'
    db.query(sql,userinfo.username,(err,results)=>{
    if(err){
      // 执行SQL语句失败
      return res.cc(err)
    }
    //判断用户名是否能被查询到
    if(results.length!==1){
      return res.cc('登录失败，用户名错误')
    }
    //判断用户输入密码和账号是否能在数据库中查询到
    const compareResult=bcryptjs.compareSync(userinfo.password,results[0].password)
    if(!compareResult){
      return res.send('登录失败，密码错误')
    }
    //在服务器端生成token字符串
    const user={...results[0],password:'',user_pic:''}
    const tokenstr=jwt.sign(user,secretKey.jwtSecretKey,secretKey.expiresIn)//token有效期为10小时
    res.send({status:0,msg:'登陆成功',token:'Bear'+tokenstr})
  })
}