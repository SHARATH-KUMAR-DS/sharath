class Userlist{
constructor(){
this.user=["Avi","Bharath","Raju","Ravi","Nuthan","ramesh"];
}
}
class Billing extends Userlist{
    constructor(){
        super();
        this.product="Apple";
       this.price=200;
       this.qty=5;


        
    }
    getBill=()=>{
        console.log("        Billing     ");
        console.log("name:",this.user[5]);
        console.log("product:",this.product);
        console.log("price:",this.price);
        console.log("qty:",this.qty);
        console.log("Total Amount:",this.price*this.qty);
        console.log("         Thanks        ");
    }
    getCustomer=()=>{
        console.log("    Available Customers    ");
this.user.map((name,index)=>{
    console.log(index,name);
})
    }

    
}
var object2=new Billing();
object2.getBill();
object2.getCustomer();