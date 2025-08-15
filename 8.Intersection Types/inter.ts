type userinfo = {
    name: string;
    age: number;
    location: string
}
type userquali = {
    email?: string;
    id: number;
}
type namoi = userinfo & userquali
const abhi: namoi = {
    name: "abhishek",
    age: 20,
    location: "india",
    email: "abhi909195i2i@gmail.com",
    id: 654352465
}
console.log(`name:${abhi.name} age:${abhi.age} location:${abhi.location} email:${abhi.email} id:${abhi.id}`)