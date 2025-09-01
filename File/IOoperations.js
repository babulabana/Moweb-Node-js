const fs  = require("fs");

fs.rename("demo.txt","newdemo.txt",(err)=>{
    if(err) throw err;
    console.log("file renamed successfully")
})


fs.existsSync('newdemo.txt');

fs.stat("newdemo.txt",(err,stats)=>{
    if(err) throw err;
    console.log(stats.isFile());
})