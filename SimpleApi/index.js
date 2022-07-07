
/*
    -> creating simple static api
    -> run npm init
    -> run npm i http
    -> create module for data and export it 
    -> import data module
    -> creating server
    -> calling api

*/

// import http dependency
const http= require('http');

// import data module 
const data=module.require('./data');

// Creating a server , its take arrow function with two parameters request and response

http.createServer((req, resp)=>{

    // Write head method is used for header 

     resp.writeHead(200,{'Content-Type' : 'appliction\json'});

    // write method is used to save data data , JSON. stringify convert data to json format

     resp.write(JSON.stringify(data));

    // response end

     resp.end()
    }
    // listen is used for port
).listen(5000);
