const { response } = require('express');
const express = require('express');
const dbConnect= require('./mongodb');
// mongodb is the intance of db
const mongodb=require('mongodb');
const app = express();

// statement use to convert data to json format

app.use(express.json());

//=======================================================================================
// Get Api
app.get('/', async(request, response)=>{
    let data = await dbConnect();
    let result= await data.find().toArray();
    response.send(result);
    console.log(result);

 });

 //=======================================================================================
// Post Api
 app.post('/', async(requset,response)=>{
    let data = await dbConnect();
    let result= await data.insertOne(requset.body);
    response.send(result);
 })

 //=======================================================================================
// Put Api
// Two ways to update data using key 
// 1st use key in parameters '/:name', 
//2nd use key in 1st object  {name:requset.body.name}
app.put('/:name',async(requset,response)=>{
    console.log("data updated");
     let data=await dbConnect();
    // 2nd way   {name:requset.body.name}
    let result=await data.updateOne(
    {name:requset.params.name},
    {$set:requset.body}
    );
     response.send(result);
})
//=======================================================================================
// Delete Api
// To get id you have to use object
// use _id

app.delete('/:id',async(request,response)=>{
    let data= await dbConnect();
    let result= await data.deleteOne(
        {_id:new mongodb.ObjectId(request.params.id)}
        );
    response.send(result);

});

 app.listen(5000);