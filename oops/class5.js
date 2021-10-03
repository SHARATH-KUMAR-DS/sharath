class Apidata{
    getData=()=>{
        var data=("<h2> Customer list </h2>");
        fetch("customer.json")
        .then(response => response.json())
        .then(customerArray=>{
            customerArray.map((name,index)=>{
                data+="<p>"+index+" . "+name+"</p>";
            })
            document.getElementById("container").innerHTML=data;
        })
    }
}
var obj4 =new Apidata();
