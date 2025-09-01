const fs = require("fs");

fs.writeFile("demo.txt","this is demo file of writefile method",(err)=>{
    if (err) throw err;
    console.log("file is created successfully")
})


fs.writeFileSync("demo.txt","this is demo file of writefilesync method") 
console.log("Sync file  is created successfully")

fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data)
});


const data = fs.readFileSync("demo.txt","utf-8");
   try {
    console.log(data)
   }
   
   catch (err) {
  console.error(err);
}

fs.open('demo.txt', 'r', (err, fd) => {
  if (err) throw err;
  console.log(`File opened with file descriptor: ${fd}`);
})


fs.unlink('demo.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});