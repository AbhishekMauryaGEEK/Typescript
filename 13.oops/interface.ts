interface maths{
    (x:number,y:number):number;
}
const add:maths=(a,b)=>a+b;
const multi:maths=(a,b)=>a*b;
const div:maths=(a,b)=>a/b;
const sub:maths=(a,b)=>a-b;
console.log(`sum :${add(2,5)}\nmultiplication:${multi(34,5)}\ndivision:${div(78,4)}\nsubtract:${sub(78,56)}`);

interface movie{
   name:string;
    genre:string;
    rating:number;
}
const pvr:movie={
    name:"f1",
    genre:"action",
    rating:8.1
}
console.log(pvr)
interface human{
    name:string;
    age:number;
    gender:string;
    world():void
}

const firsth :human={
    name:"abhi",
    age:21,
    gender:"male",
    world(){
        console.log("say hello")
    }
}
function hello(human1:human) {
    console.log(`hello,${human1.name}`)
    human1.world()
}
console.log(firsth)
hello(firsth)