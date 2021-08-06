var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,22000,"qa"]
]
//nested array
//print employeenames only

// for(let employee of employees){
//     console.log(employee[1]);
// }
console.log(employees.map(emp=>emp[1]));
//print employee designaton
// for(let employee of employees){
//     console.log(employee[4]);
// }
console.log(employees.map(emp=>emp[4]))

console.log("employee name whose salary >2300")
// for(let employee of employees){
//  if(employee[3]>23000){
//  console.log(employee[1]);}

// }


console.log(employees.filter(emp=>emp[3]>2300))
 console.log("print highest paid employee");
 let max_sal=0;
 for(let emp of employees){
     if(emp[3]>max_sal){
         max_sal=emp[3];
     }
 }
  console.log(max_sal);
  for(let emp of employees){
      if(emp[3]==max_sal){
          console.log(emp);
      }
  }  


//print lowest paid employee


console.log("print lowest paid employee");




console.log("number of employees working as developer") ;
let count=0;
for(let employee of employees){
    
    if(employee[4]=="developer"){
        count++;
    }
}
console.log(count)
//print number of employees working as qa
let count1=0;
for(let employee of employees){
    
    if(employee[4]=="qa"){
        count1++;
        //console.log(employee[4]);
    }
}
console.log(`number of employees working as qa${count1}`)
console.log(employees.filter(emp=>emp[4]=="developer"))
console.log(employees.filter(emp=>emp[3]>23000 & emp[4]=="developer").map(emp=>emp[2]))











