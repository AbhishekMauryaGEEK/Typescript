// function num(age:number,length:number) :[number,number]{
//     return [age,length]
// }
// function str(age:string,length:string) :[string,string]{
//     return [age,length]
// }
// function bol(age:boolean,length:boolean) :[boolean,boolean]{
//     return [age,length]
// }
// function any(age:any,length:any) :[any,any]{
//     return [age,length]
// }
function unique<T>(item:T,default1:T):[T,T]{
    return[item,default1]
}
const res =unique<string>("apple","always")
console.log(res)
interface dog{
    name:string;
    bread:string;
    age?:number;
}
const dog1=unique<dog>(
    {name:"rocky",bread:"labrador"},
    {name:"sam",bread:"pug"}
);
console.log(dog1)

function default1<T>(obj:{[key:string]:T}):{
    key:string;
    value:T;
}
{
    const keys =Object.keys(obj)
    const randkey=keys[Math.floor(Math.random()*keys.length)]
    return {key:randkey,value:obj[randkey]}
}
const stringobj={a:"apple",b:"banana",c:"cherry"}
const strgen=default1<string>(stringobj);
console.log(strgen)
const numobj={one:1,two:2,three:3}
const numgen=default1<number>(numobj);
console.log(numgen)
