/*
     ->> use multer packege
*/

const express = require('express');
const multer= require('multer');
const app= express();

//=======================================================================================
// upload file

// create a function for uplad file

const upload=multer({
    storage:multer.diskStorage({
        destination:function (request,file,callback){
         callback(null,'uploads');
        },
        filename: function (request,file,callback){
         callback( null, file.fieldname+ Date.now +".jpg" );
        }
    })
}).single("user_file");

// ===============================================================================
// post api to upload file

app.post('/upload',upload,async(request,response)=>{
    
    response.send("file uploaded");
});

app.listen(5000);