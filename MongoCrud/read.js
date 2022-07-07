/* two ways to handle data
    -> Promises
    -> Aysnc , await
*/

const dbConnect = require("./mongodb");

// 1st way Read data using promise
// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//        console.log(data);
//     });
// });

// 2nd way Read data using Async ,await
const readData=async()=>{
    let  data= await dbConnect();
    data= await data.find().toArray();
    console.log(data);
    }
    readData();