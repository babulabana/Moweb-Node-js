console.log("vishal labana")
const fs = require("fs");
const http = require("http");
http.createServer((req,res)=>{
    res.write("hello vishal labana")
    res.end()
}).listen(8010,()=>console.log("server is runing at port 8010"))
fs.writeFileSync("vishal.txt","i am vishal ygugewdw")
fs.readFileSync("vishal.txt","utf-8")