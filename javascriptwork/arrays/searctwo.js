var arr1=[10,20,30,40];
var arr2=[9,10,12,20];
// for(i=0;i<arr1.length;i++){//o(n)
//     for(j=0;j<arr2.length;j++){//o(n)
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i]);
//         }
//     }
// }
let pos1=0,pos2=0;
while(pos1<arr1.length & pos2<arr1.length){
    if(arr1[pos1]==arr2[pos2]){
        console.log(arr1[pos1]);
        pos1++,pos2++;

    }else if(arr1[pos1]>arr2[pos2]){
        pos2++;
    }else{
        pos1++;
    }
}