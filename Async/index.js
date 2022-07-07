/*
    -> Asynchroneous programming
    -> Promises, when data is loading promises wait for it
*/

let a=10;
let b=0;

console.log("start");

let waitingData=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve(20);
     },2000)
});

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
});

console.log("end");




