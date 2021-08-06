var num=112,sum=0;
while(num>0){
    rem=num%10;
    sum+=rem;
    num=Math.floor(num/10);

}

console.log(sum);