const express = require('express')
const multer = require('multer');
const http = require("http");

const app = express();
http.createServer((req,res)=>{



const upload = multer({dest:'uploads/'});

app.post('/upload',upload.single('file'),(req,res)=>{
    res.send("file uploaded successfully");
});
}).listen(8010,()=>console.log("server is runing at port 8010"))
