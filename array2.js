var item=["apple","mango","grapes","banana","orange"];

for(i=0;i<item.length;i++){
    console.log(i+"=>",item[i]);
}
console.log("     \n        ");

for(i=item.length-1;i>=0;i--){
    console.log(i+"="+item[i]);
}
console.log("\n");
var i=0;
while(i<item.length){
    console.log(i+"="+item[i]);
    i++;
}

console.log("\n");
var i=item.length-1;
while(i>=0){
    console.log(i+"@"+item[i]);
    i--;
}
console.log("\n");

var i=0;
do{
    console.log(i+"$"+item[i]);
    i++;
} while(i<item.length);

console.log("\n");

