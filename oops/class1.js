class Test{
    constructor(){
this.a =200;
this.b=200;
    }
    one=()=>{
        console.log("Welcome from One",this.a+this.b);
    }
    two=()=>{
        console.log("Welcome from two",this.a+this.b);
    }
}
var object=new Test();
object.one();
object.two();
console.log(object.a);
console.log(object.b);