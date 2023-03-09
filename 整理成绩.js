const fs=require('fs');
const path=require('path')
// const datastr1=[]
// // 读取文件
// fs.readFile(__dirname+'/1.txt','utf-8',(err,datastr)=>{
//   if(err){
//     console.log(err.message)
//   }else{
//     console.log('success'+'\n'+datastr)
//   }
//   let arr=datastr.split(' ')
//   let newarr=[]
//   arr.forEach(item => {
//     newarr.push(item.replace('=',':'))
//   });
//   // console.log(newarr)
//   const newStr=newarr.join('\r\n')
//   // console.log(newStr)
//   fs.writeFile('./2.txt',newStr,'utf-8',(err)=>{
//     if(err){
//       console.log(err)
//     }else{
//       console.log('write successfully')
//     }
//   })
// })
// const str=path.join(__dirname,'/1.txt');
// console.log(str)
const fpath='/a/b/c/index.html'
console.log(path.basename(fpath))
// index.html
console.log(path.basename(fpath,'html'))
// index
console.log(path.extname(fpath))
// .html