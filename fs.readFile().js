const fs=require('fs');
fs.readFile('./1.txt','utf-8',(err,datastr)=>{
  // 
  if(err==null){
    console.log('file successfully read'+'\n'+datastr)
  }else{
    console.log('Error reading file:'+'\n'+err.message)
  }
  // console.log('------');
  // console.log(datastr);
})