let password:string|number="sd"
type info={
    first:string;
    last:string;
    age:number;
}
type account={
    email:string;
    password:string;
}
let user :info | account={
    first :"john",
    last :"doe",  
    age:20 
}
const items:(number|string)[]=[1,2,3,"hello"];
console.log(items)