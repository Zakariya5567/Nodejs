const mongoose = require('mongoose');

const productShema= new mongoose.Schema(
    {
        name:String,
        price:Number,
        brand:String,
        category:String
    }
);

module.exports=mongoose.model('products',productShema);