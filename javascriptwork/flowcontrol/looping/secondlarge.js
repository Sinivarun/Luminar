var num1=20,num2=40,num3=3;
var sec;
var res=num1>num2&num1>num3?num1:num2>num1&num2>num3?num2:num1;
console.log(`largest  ${res}`);
if(num1==res){
     sec=num2>num3?num2:num3;
     console.log(sec);
}else if(num2==res){
    sec=num1>num3?num1:num2;
     console.log(sec);
}else{
    sec=num1>num2?num1:num2;
     console.log(sec);
}

