/* 
    -> create files in directiory
    -> read file from directory

*/

const fs = require('fs');

// import path 

const path = require('path');

// use for  directory path

const dirpath=path.join(__dirname);

// add your file to directory path
const filePath=path.join(__dirname,'File');

console.log(filePath);

// use loop to create multiple file


for (i=1;i<=5;i++){
    fs.writeFileSync(filePath+`/hello${i}.txt`,`his is directory${i}`);
}

// read files form directory path  as a list

fs.readdir(filePath,(err,files)=>{
    console.warn(files);
});


// read files form directory path 

fs.readdir(filePath,(err,files)=>{
    files.forEach((item)=>{
        console.warn(item);
    })
});


