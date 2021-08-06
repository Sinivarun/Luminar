var expenses=[3000,4000,5000,6000,8000,3000]
for(let i=0;i<expenses;i++){
    console.log(expenses[i]);
}
//of
for (let amount of expenses){
    console.log(amount);
}
//in
for(let amount in expenses){
    console.log(amount);
}