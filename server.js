const http = require("http");

http.createServer((req,res)=>{
       if(req.url==="/demo"){
        if(req.method=="GET"){
            res.write("this is demo page of get method")
        }

        if(req.method=="POST"){
            res.write("this is demo page of post method")
        }

         if(req.method=="PUT"){
            res.write("this is demo page of PUT method")
        }
         if(req.method=="DELETE"){
            res.write("this is demo page of DELETE method")
        }
       }
        else{
            res.write("here we will handle /req")
        }




    

    res.end()
}).listen(8010,()=>console.log("server is runing at port 8010"))