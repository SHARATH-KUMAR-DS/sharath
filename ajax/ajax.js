var home=()=>{
    var xmlhttp = new XMLHttpRequest();// creating object of xmlhttpRequest class
    xmlhttp.open("GET","home.html",true);//making a url based on get method
    xmlhttp.send();// request will send to home file
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajaxdata").innerHTML = this.responseText;
      }
    };
    

}
var service=()=>{
    var xmlhttp = new XMLHttpRequest();// creating object of xmlhttpRequest class
    xmlhttp.open("GET","service.html",true);//making a url based on get method
    xmlhttp.send();// request will send to home file
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajaxdata").innerHTML = this.responseText;
      }
    };  
    
}
var contact=()=>{
  var xmlhttp = new XMLHttpRequest();// creating object of xmlhttpRequest class
    xmlhttp.open("GET","data.json",true);//making a url based on get method
    xmlhttp.send();// request will send to home file
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var dataArray=JSON.parse(this.responseText);
        var data="<div class='row text-center'>";
        data+="<div class='col-lg-4'>";
        data+="<h3 class='text-danger'>City List </h3>";
        dataArray.city.map((cityname,index)=>{
          data+="<p>"+cityname+"</p>";
         
        })
        data+="</div>";
        data+="<div class='col-lg-4'>";
        data+="<h3 class='text-info'>Food List</h3>";
        dataArray.food.map((foodname,index)=>{
          data+="<p>"+foodname+"</p>";
         
        })
        data+="</div>";
        data+="<div class='col-lg-4'>";
        data+="<h3 class='text-danger'>vehicle List</h3>";
        dataArray.vehicle.map((vehiclename,index)=>{
          data+="<p>"+vehiclename+"</p>";
        
        })
        data+="</div>";
        data+="</div>";
document.getElementById("ajaxdata").innerHTML=data;
    } 
    

};
}
var register=(pagename)=>{
  var xmlhttp = new XMLHttpRequest();// creating object of xmlhttpRequest class
    xmlhttp.open("GET",pagename,true);//making a url based on get method
    xmlhttp.send();// request will send to home file
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajaxdata").innerHTML = this.responseText;
      }
    };
  }

