var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names
console.log(products.map(pdt=>pdt[1]));

// print avaialable product name
console.log(products.filter(pdt=>pdt[3]>0).map(pdt=>pdt[1]))

// print out of stock product details
console.log(products.filter(pdt=>pdt[3]==0))


// list all products whose price > 250
console.log(products.filter(pdt=>pdt[2]>250).map(pdt=>pdt[1]))

// low cost product


// is there any item available under 200
console.log(products.filter(pdt=>pdt[2<200]))
