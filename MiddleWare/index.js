/*
    -> Middle is a function use for routing
    -> application level middleware which we can apply on whole page
    -> route level middleware which we can apply on single or group of pages
    -> We can access and modify routes through middleware
    -> use for changes in request and response
    -> Check authentication that the user is login or not
    -> applying middleware on group  - const route = express.Router();
*/
const express = require('express');
const app = express();
const route = express.Router();

// initializing middleware
// it takes three parameters req,res,next
// next(); is important
// must initiazed middleware app.user(middlewareName);

const reqFilter=(req,res,next)=>{
    
    if(!req.query.age){
     res.send("Age is required");
    }else if(req.query.age<18){
        res.send("You cannot access this page");
        
    }else{
        next();
    }

}

// for group
route.use(reqFilter);
// middleware use for app level 
// app.use(reqFilter);

app.get('',(req,res)=>{
    res.send("Welcome to home page");
});

app.get('/profile',(req,res)=>{
    res.send("Welcome to Profile page");
});

// if you want to set middleware in single page just and middleware name inside get,

// app.get('/profile',reqFilter,(req,res)=>{
//     res.send("Welcome to Profile page");
// });

// apply middleware on groups
// route.get()
// at the end  app.use('/',route);


route.get('/help',reqFilter,(req,res)=>{
    res.send("Welcome to Help page");
});
route.get('/contact',reqFilter,(req,res)=>{
    res.send("Welcome to Contace page");
});

app.use('/',route);

app.listen(5000);