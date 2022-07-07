/*
    -> Express js  is framework for node js to make things easy
    -> run npm install express

*/

// import express
const express=require('express');
// initializad express
const app=express();

// using get 
// two index first is route '', second is arrow function which take two
// parameters req and res

app.get('',(req,res)=>{
//send fucntion to send data to server / page
res.send('Welcome to Home page');
});

app.get('/about',(req,res)=>{
   res.send('Welcome to About page')
});

app.get('/help',(req,res)=>{
    res.send('Welcome to Help page')
 });

 // must to intializad servers port
 app.listen(5000);