class userlist{
    constructor(){
        this.user=["Avi","Bharath","Raju","Ravi","Nuthan","ramesh"];
    }
    getCustomer=()=>{
      var data="<h2> Customer list</h2>";
      this.user.map((name,index)=>{
          data+="<p>"+ index+". "+name+"</p>";
      })
      document.getElementById("container").innerHTML=data;
    }


save=()=>{
    var newCustomer=document.getElementById("newname").value;
    this.user.unshift(newCustomer);
    this.getCustomer();
    this.clearText();
}
clearText=()=>{
    document.getElementById("newname").value="";
}
}
    

   var obj3 = new userlist();
                                            