//chk number is prime or not
var num = 13;
var flag = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        
       flag += 1;//counting
       console.log(flag);
        break;
       
    }

}
console.log(flag==0?"prime":"not prime");
