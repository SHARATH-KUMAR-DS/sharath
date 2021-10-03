var item =[
    {
        name:"apple",
        price:200,
        qty:13,
        prd:2

    },{
        name:"mango",
        price:400,
        qty:15,
        prd:4
    },
    {
      name:"banana",
      price:500,
      qty:56,
      prd:4  
    }
];
console.log("total items:"+item.length);
item.map((iteminfo,itempos)=>{
    console.log(iteminfo.name,iteminfo.price,iteminfo.qty,iteminfo.prd);
})
console.log("     ");