//http module is used to connect api server with web
// for creating server we user http.createServer
// Two function parameter will be passed when creating server 1 request ,2 response
// response must be end;

// there are two way for creating server
// 1 direct method
// pass function 

const http=require('http');

 function sendData(req,resp){
    resp.write("<h1>This is node js</h1>");
    resp.end();
}

// http.createServer(
// (req,resp)=>{
// resp.write("<h1>This is node js</h1>");
// resp.end();
// }
// ).listen(4500);

http.createServer(sendData).listen(5000);