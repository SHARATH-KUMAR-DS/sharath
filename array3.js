var item=["apple","mango","grapes","banana","orange"];

item.map((elementname,elementpos)=>{
    console.log(elementname,elementpos);
})
console.log("2nd")
item.map(elementname=>{
    console.log(elementname);
})
item.map(function(elementname){
    console.log(elementname);
})