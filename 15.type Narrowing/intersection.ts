type emp={
    id:number;
    name:string;
}
type manager={
    department:string;
    role:string;
}
type comp=emp & manager
const newmanage:comp={
    id:12323,
    name:"abhi",
    department:"sales",
    role:"senior principle eng"
}
console.log(newmanage.id)
console.log(newmanage.department)
console.log(newmanage.name)
console.log(newmanage.role)