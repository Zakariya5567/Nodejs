const dbConnect=require('./mongodb');

    // updateOne()  use to update only single data in db
     // updateMany()  use to update Multiple data in db
     // update take two objects . 1st for condition and 2nd for changes $set: is important in 2nd object

const updateData=async ()=>{
    let data=await dbConnect();
    let result= await data.updateOne(
        {name:"m5"} ,{
            $set:{brand:"vivo"}}
    );
    console.warn(result);
 
}

updateData();