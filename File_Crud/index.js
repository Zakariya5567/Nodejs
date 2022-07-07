/*
    -> Create , read , update, delete file
    -> rename file
*/

const fs=require('fs');
const path=require('path');

const dirpath=path.join(__dirname,'crud');

const filePath=`${dirpath}/file.txt`

// create file
fs.writeFileSync(filePath,'this is a file path');

// read file

fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item);
})

// update 

fs.appendFile(filePath,' and file name is file',(err)=>{
    if(!err) console.log("file is upated");
})

// rename file 

fs.rename(filePath,`${dirpath}/files.txt`,(err)=>{
    if(!err) console.log("rename successfully");
})

// delete file
 fs.unlinkSync(`${dirpath}/files.txt`,(err)=>{
    if(!err) console.log("file delete successfully");
 })