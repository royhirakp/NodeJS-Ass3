const fs = require("fs");

const html_data = `<h1> Hello World </h1><p> This is {Hirak roy}... </p>`
fs.writeFile("index.html",html_data,(e)=>{
    if(e){
        console.log(e)
    }else{
        console.log("file created")
    }
})

const http = require("http")
let html_read_data;

fs.readFile("index.html","utf-8",(e,data)=>{
    console.log(e);
    html_read_data  = data
})

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    // res.write()
    res.write(html_read_data)
    res.end()
})
server.listen(4000,()=>{console.log("5000 port running")})