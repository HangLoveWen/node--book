function padZero(n){
  if(n>9){
    return n
  }else{
    return '0'+n
  }
}
module.exports={
  dataformat:(time)=>{
    let y=time.getFullYear()
    let m=time.getMonth()+1
    let d=time.getDate()
    let h=padZero(time.getHours())
    let s=padZero(time.getMinutes())
    let ss=padZero(time.getSeconds())
    return `${y}-${m}-${d} ${h}:${s}:${ss}`
  }
}