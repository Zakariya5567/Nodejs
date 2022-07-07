const dbConnect = require("./mongodb");

const insertData = async()=>{
    
   const db = await dbConnect();
    // insertOne() used to add single data into db insetOne( {} )
   // insertMany() used to add many data into db insetMany( [{},{},{}] )
   const result=db.insertMany(
    [
        { 'name':"j7","price":"5000","brand":"nokia" ,"category":"mobile" }
    ]
    );
    if((await result).acknowledged){
        console.log("data inserted");
    }

}
insertData();