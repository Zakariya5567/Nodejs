// Mongodb is a non sql database
// import mongodb packege
// Two ways to import mongo db

// 1st way 'offical way'
const {MongoClient}=require('mongodb');
//second way
// const Mongodb=require('mongodb').MongoClient;

//set url path of the mongodb
const url='mongodb://localhost:27017';
// make connection
const client=new MongoClient(url);

// store database in variable
const database='e-comm';

// using asyc method for getting data

async function getData(){
    // connect result and pass data to a variable
    let result=await client.connect();
    let db=result.db(database);
    //to acces specific collection
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();
    console.log(response);
}

getData();