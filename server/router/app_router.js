const express = require("express");
const router = express.Router();
const DB = require("../module/db.js");
const db = new DB("hzw");
const jwt = require("../module/jwt.js");
const upload = require("../module/upload.js");
//获取验证码
router.get("/getCode",(req,res)=>{
    db.find("code",{},(err,data)=>{
        if(err) throw err;
        let num = parseInt(Math.random()*(10000-1000));
        num = JSON.stringify(num);
        res.send(num);
    })
})
router.post("/register",(req,res)=>{
    db.insertOne("userList",req.body,(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})
router.get("/login",(req,res)=>{
    console.log(req.query)
    let username=req.query.username;
    let password = req.query.password;
    db.find("userList",{query:{username,password}},(err,data)=>{
        if(data.length>=1){
            //用户存在
            let user = data[0];
            db.insertOne("adminLog",{
                userID:user._id,
                doTime:new Date().getTime(),
                doSth:"登陆"
            },(err,result)=>{
                if(err) throw err;
                res.send({
                    "userID":user._id,
                    "username": user.username,
                    "user_tokenID":jwt.getToken({
                        userID:user._id
                    },"7d")
                })
            })
        }else{
            //用户不存在
            res.status(400);
            res.send();
        }
    })
})
module.exports = router;