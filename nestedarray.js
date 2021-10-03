var item=[
    {
        category:"books",
        specials:["masti","kuvempu","bendre","govind","venkat","tejaswi"]
    },
    {
       category:"food",
       specials:["rasm","rice","dosa","idli","apple","mango"]
    },
    {
        category:"games",
        specials:["cricket","football","hockey","handball","volleyball","chess"]
    }
];

console.log(item[1].specials[1]);
console.log(item[2].specials[5]);

item.map((info,index)=>{
    console.log(info.category);
info.specials.map((specialsname,specialsindex)=>{
    console.log("\t",specialsname,specialsindex);
})
})