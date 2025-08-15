type user={
    name:string;
    age:number;
    location:string
}
const printUserinfo=(user:user)=>{
    return`Name:(${user.name}) age:(${user.age}) location:(${user.location})`
}
const ans=printUserinfo({name:"alex",age:20,location:"india"})
console.log(ans)

type akmd={
    name:string;
    age?:number;
    readonly location:string
}
const akoi:akmd={
    name:"abhi",
    location:"india"
}
console.log(`name:${akoi.name} age:${akoi.location}`)