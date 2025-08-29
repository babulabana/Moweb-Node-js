const http = require("http");

http.createServer((req,res)=>{

       if(req.url==="/car"){
        
            res.write("this is car page of get method")
       
       }

        if(req.url==="/demo"){
        
            res.write("this is demo page of get method")
       
       }

        if(req.url==="/test"){
        
            res.write("this is test page of get method")
       
       }

       




    // res.write("hello vishal labana")


    res.end()
}).listen(8080,()=>console.log("server is runing at port 8080"))