var num=153;
var res="";
while(num!=0){
    let digit=num%10;
    console.log(digit);
   // sum=(sum*10)+digit;
    res+=digit;
    num=Math.floor(num/10);

    
}
console.log(res);
