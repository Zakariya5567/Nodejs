/*
    -> Using commond line add and remvoe file
    -> process is a system define function which have more data
    -> we will use process.args
*/

// import filesystem

const fs=require('fs');

// console.log(process);
// console.log(process.argv);

// store process.argsv in variable

const input= process.argv;

//fs.writeFileSync(input[2],input[3]);

//console.log(input[1]);

/*
    -> use condition when we pass add in argument it will add file
    -> run node ./index.js add filename.txt 'this is description'
    -> and when we pass remove in arguments it will delete file
`   -> run node ./index.js add filename.txt 
 */

if(input[2]=='add'){

    fs.writeFileSync(input[2],input[3]);

}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
    
}else{
    console.log("invilid output");
}

