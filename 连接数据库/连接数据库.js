const mysql=require('mysql')
const db=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'admin123',
  database:'my_db_01'
})
// const user={username:'SpiderMan',password:'pcc321'}
// const sql='insert into users (username,password) values (?,?)'
const user={id:7,username:'aaa',password:'000'}
// const sql='insert into users set ?'
// const sql='update users set username=?,password=? where id=?'
// const sql='update users set ? where id=?'
// const sql='delete from users where id=?'
const sql='update users set status=? where id=?'
db.query(sql,[1,5],(err,results)=>{
  if(err){
    return console.log(err.message)
  }
  // if(results.affectedRows===1){
  //   console.log('插入成功')
  // }
  //  if(results.affectedRows===1){
  //   console.log('数据更新成功')
  // }
  if(results.affectedRows===1){
    console.log('数据删除成功')
  }
})
