
const dbConnect= require('./mongodb');
 // delteOne()  use to delete only single data in db
 // deleteMany()  use to delete Multiple data in db
// delete take one object for condition 

const deleteData= async ()=>{   
    let data= await dbConnect();
    let result= await data.deleteOne({name:"j7"});

    if(result.acknowledged){
        console.warn("data deleted");
    }

}
deleteData();