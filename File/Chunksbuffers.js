const fs = require("fs");
const { buffer } = require("stream/consumers");

const readstream = fs.createReadStream("newdemo.txt","utf-8");

readstream.on("data",(chunk)=>{
    console.log("received chunk : ",chunk);

});
const buf = Buffer.from("hello this is buffer from streem");
console.log(buf);