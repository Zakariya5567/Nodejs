const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/e-comm');
// schema
const productSchema= new mongoose.Schema({
     name:String,
     price:Number,
     brand:String,
     category:String
});
 // model
 const productModel= new mongoose.model('products',productSchema);


const InsetInDb = async()=>{
   
    let data = new productModel(
        {
            name:"d20",
            price:100,
            brand:"Huwaei",
            category:"mobile",
        }
        );
    let result= await data.save()
    console.log(result);
    
}
// InsetInDb();

const updateInDb = async ()=> {
   // const product =  mongoose.model('products',productSchema);
    let data = await productModel.updateOne(
        {name:"d20"},
        {
            $set:{price:1200}
        }
    )
    console.log(data);
}

// updateInDb();

const deleteInDb= async ()=>{

    let data= await productModel.updateOne({name:"d20"});
    console.log(data);

}

// deleteInDb();

const findInDb= async ()=> {
    let data= await productModel.find();
    console.log(data);

}
findInDb();