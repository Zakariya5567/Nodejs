const express = require('express');
require('./config');
const product= require('./product');

const app= express();
app.use(express.json());


//=======================================================================================
//create

app.post('/create', async (request,response)=>{
    let data=new product(request.body);
    let result= await data.save();
    response.send(result);
    console.log("Done");
    
});


//=======================================================================================
//read

app.get('/read', async (request,response)=>{
   
    let data= await product.find();
    response.send(data);
    console.log("Done");
    
});


//=======================================================================================
//delete

app.delete('/delete/:_id', async (request,response)=>{
    console.log(request.params);
    const data = await product.deleteOne(request.params);
    response.send(data);
    console.log("Done");
    
});

//=======================================================================================
//update

app.put('/update/:_id', async (request,response)=>{
    console.log(request.params);
    let data = await product.updateOne(
        request.params,
        {
            $set:request.body
        }
        
        );
    response.send(data);
    console.log("Done");
    
});

//=======================================================================================
//Search

app.get('/search/:key', async (request,response)=>{
    console.log(request.params.key);
    let data = await product.find(
        {
            "$or":[
                    {name:{$regex:request.params.key}},
                    //if search in multiple
                    // {brand:{$regex:request.params.key}},
                    // {category:{$regex:request.params.key}}
            ]
        }

    );
    response.send(data);
    console.log("Done");
    
});


