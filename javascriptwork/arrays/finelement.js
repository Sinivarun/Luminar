var arr=[10,11,12,13,14]
//create a progeram to find an element from this array
var element=13,flag=0;
for(let num of arr){
    if(num==element){
       flag++;
       break; 
        
    }
}
console.log(flag==0?"elementnot found":"element found");
//linear search


// for(let i=0;i<arr.length;i++){
//     if(element==arr[i]){
//         console.log("element found")
//     }
// }
