const express = require("express");
const approuter = require("./router/app_router.js");
const bodyParser = require("body-parser");
const http = express();
http.listen(4000,()=>{
    console.log("server port 4000");
})
http.use(bodyParser.urlencoded({extended:false}));

http.use("/app",approuter)


http.all("*",(req,res)=>{
    res.header("access-control-alown-origin","*")
    res.sendFile(__dirname+req.url);
})