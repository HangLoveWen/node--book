const qs=require('querystring')
function bodyparser(req,res,next){
  let str=''
  req.on('data',(trunk)=>{
    str+=trunk
  })
  req.on('end',()=>{
    const body=qs.parse(str)
    req.body=body
    next()
  })
}
module.exports=bodyparser