const http=require("http");

const requestListener=((req,res)=>{
    res.write("Hello World\n");
    
    res.end();
    //res.end("Hello World");
});

const server=http.createServer();
server.on("request",requestListener);

server.listen(4242,()=>{
    console.log('Server is running..');
});