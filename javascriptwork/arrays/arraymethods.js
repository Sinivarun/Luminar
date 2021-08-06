//map()
var arr1=[2,3,4,5,6];
    // function sqaure(num){
    //     return num**2;
    // }
    //step reduced
    // var square=num=>num**2;
console.log(arr1.map(num=>num**2));
console.log(arr1.map(num=>num**3));
var sq=arr1.map(num=>num**3);
console.log(sq);
console.log(arr1);

var names=["ram","ravi","arun"]
console.log(names.map(name=>name.toUpperCase()));

var nums=[2,3,4,6,7,8];
console.log(nums.map(num=>num>5?num+1:num-1));

