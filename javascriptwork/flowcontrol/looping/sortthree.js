var num1=20,num2=30,num3=40;

    if(num1<=num2& num2<=num3 ){
        
    console.log(num1,num2,num3);
}else if(num1<=num2 & num3<=num2){
    console.log(num2,num1,num3);
}else if(num2<=num1 & num1<=num2){
    console.log(num3,num1,num3);
}else if(num2<=num3 &num2<=num1){
    console.log(num1,num3,num2);
}else if(num3<=num1& num1 <=num2){
    console.log(num2,num1,num3);
}else{
    console.log(num3,num1,num2);
}

    
