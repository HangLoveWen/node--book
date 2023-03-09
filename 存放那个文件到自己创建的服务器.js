const fs=require('fs')
const path=require('path')
const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
  const url=req.url
  const content='<h1>404 Not Found</h1>'
  let fpath=""
  if(url=='/1.txt'||url=='/2.txt'){
    fpath=path.join(__dirname,url)
  }else if(url=='/'){
    fpath=path.join(__dirname,'/1.txt')
  }
  if(url=='/1.txt'||url=='/'){
    fs.readFile(fpath,'utf-8',(err,datastr)=>{{
      if(err){
        return res.end(content)
      }else{
        res.end(datastr)
      }
    }})
  }else if(url=='/2.txt'){
    fs.readFile(fpath,'utf-8',(err,datastr)=>{{
      if(err){
        return res.end(content)
      }else{
        res.end(datastr)
      }
    }})
  }else{
   res.end(content)
  }
})
server.listen(80,()=>{
  console.log('http server running at the http://127.0.0.1')
})
console.log(module)
