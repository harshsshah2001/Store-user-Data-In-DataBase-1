const express = require('express');
const app=express()
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const connection=require('./connection/conn')
app.set("view engine","hbs")
app.set("views","./views")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.render('home')
})
app.get('/signup',function(req,res){
    res.render('signup')
})
app.get('/login',function(req,res){
    res.render('login')
})

app.post('/signup',async(req,res)=>{
    const storedata = new connection({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        country:req.body.country,
        city:req.body.city
    })
    console.log(storedata);
    const registered=await storedata.save();
    res.render('home');
})

app.post('/login',async(req,res)=>{
    const storelogindata=new connection({
        name:req.body.name,
        email:req.body.email
    })
    const storelogin=await storelogindata.save()
    res.render('home')
})
app.listen(1212,function(req,res){
    console.log("Server is running")
})