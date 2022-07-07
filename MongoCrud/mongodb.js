const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const database='e-comm';

async function dbConnect(){
  let result=await client.connect();
  let db=result.db(database);
  let collection=db.collection('products');
  return collection;
}

module.exports=dbConnect;