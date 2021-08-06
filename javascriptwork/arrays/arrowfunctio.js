// function add(num1,num2){
//     return num1+num2;
// }
// var add=(num1,num2)=>num1+num2;
// var sub=(num1,num2)=>num1+num2;
// let add=(num1,num2,num3)=>{
//     let res=num1+num2+num3;
//     return res;
// }

console.log("subtracton");

// let sub=(num1,num2)=>num1-num2;
// console.log(sub(10,20));

// function smartSub(num1,num2){
//     // if(num1<num2){
//     //     return num2-num1
//     // }else{
//     //     return num1-num2
//     // }
//     return num1<num2?num2-num1:num1-num2;
// }
let smartsub=(num1,num2)=>num1<num2?num2-num1:num1-num2;
console.log(smartsub(10,20));


let add=(num1,num2)=>num1<num2?num1+num2:num1+num2;
console.log(add(3,4));

let cube=num1=>num1**3;
console.log(cube(3));
