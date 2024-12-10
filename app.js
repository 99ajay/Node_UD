//absolute path -- > require('./http');
const http = require("http");



// function rqListner(req,res){

// }
//we can create a functions and pass into the createServer as a callback.


//2nd method
// http.createServer(function(req,res){

// });


//3rd method
//server variable stores the instance of HTTP Servers using node.js, which have certain properties and the meyhods.

// for eg..(Event Emitter Behavior)--> request,connection,close,error
//Important Methods-->server.listen(port,callback);

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    // process.exit();//hard exit,give contriol back to the terminal
    res.setHeader('Content-Type','text/html');
    res.write('<html')
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>');
    res.end();
});

server.listen(3000);
//type -- localhost//3000 -- On browser-- we get output on console-- print "request" Object

