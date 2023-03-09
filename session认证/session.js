const session=require('express-session')
const express=require('express')
const app=express()
app.use(session({
  secret:'acd',
  resave:false,
  saveUninitialized:true,
}
))