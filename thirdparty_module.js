const express  = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hello vishal labana");
    res.end();
});
app.listen(8080,()=>console.log("server is runing at port 8080"))