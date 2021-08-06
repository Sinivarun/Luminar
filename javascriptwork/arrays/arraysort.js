var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 3, 5, 1, 2];

arr1.sort((num1, num2) => num1 - num2);
console.log(arr1);
arr2.sort((num1, num2) => num1 - num2);
console.log(arr2)

// arr2.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// console.log(arr2);

// for(let i=0;i<arr2.length;i++){
//     for(j=0;j<arr2.length;j++){
//         if(arr2[j+1]<arr2[j]){
//             temp=arr2[j];
//             arr2[j]=arr2[j+1];
//             arr2[j+1]=temp;
//         }

//     }
// }console.log(arr2);

let flag = 0, limit = arr2.length-1 ;
if (arr1.length != arr2.length) {
    console.log("arrays are not same")
}
else {
    for (i = 0; i < limit; i++) {
        if (arr1[i] == arr2[i]) {
            continue
        }else{
            flag++;
            break;
        }
    }
    console.log(flag == 0 ? "same array" : "not same");
}
