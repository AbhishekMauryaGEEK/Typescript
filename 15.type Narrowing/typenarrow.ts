type mytype =string|number;
function examplefunction(value:mytype):void {
    if(typeof value==="string"){
        console.log(value.toLocaleLowerCase());
    }
    else{
        console.log(value.toFixed(2))
    }
}
examplefunction("FDFGSEDGDSRFGER")
examplefunction(234)

class dog {
    bark():void{
        console.log("woof")
    }
}
class cat{
   meow():void{
        console.log("meow")
    }
}
function animalsound(animal:dog|cat):void{
    if(animal instanceof dog){
        animal.bark();
    }
    else{
        animal.meow()
    }
}
const mydog=new dog()
const mycat =new cat()
animalsound(mydog)
animalsound(mycat)