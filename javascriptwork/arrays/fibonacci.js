



function getoffib(n){

var n ,arr=[];
let temp ,num1 = 0,num2 = 1;
for (let i = 0; i <n; i++) {
    // console.log(num1);
       arr[i]=num1;
    temp = num1 + num2;
    num1=num2;
    num2=temp;
    

}
return arr;}

console.log(getoffib(4));



