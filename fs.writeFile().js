const fs=require('fs');
fs.writeFile('f:./1.txt','Hello Node.js',(err)=>{
  if(err){
    console.log('文件写入失败！'+'\n'+err);
  }else{
    console.log('文件写入成功！');
  }
})