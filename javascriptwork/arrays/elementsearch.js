//binarysearch
var arr=[2,4,6];
//sum=arr[0]+arr[1]+arr[2];
var total =0;
for(let num of arr){
     total+=num;
}
for(let num of arr){
    console.log(total-num);
}