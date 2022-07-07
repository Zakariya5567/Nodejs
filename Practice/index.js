const { arr } = require('./app');
const app=require('./app')

console.log(app);
console.log("calling varaible x ",app.x);
console.log("calling function z ",app.z());
console.log("calling array arr ",app.arr);
console.log("calling object obj ",app.obj);

// fiter function
const array=[2,4,5,6,7,4,9];

console.log("array is ", array);
console.log("index of 3 is ",array[3]);

let result= array.filter((item)=>{
  return item===4; 
})

console.log(result);