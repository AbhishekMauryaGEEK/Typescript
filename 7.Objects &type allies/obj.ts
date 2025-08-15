function obj(): { firstname: string, age: number, male: boolean } {
    return {
        firstname: "abhi",
        age: 20,
        male: true
    }
}
console.log(`${obj}`)
console.log(obj())
const persona: { firstname: string; age: number; male: boolean }={
        firstname:"abhi",
        age:20,
        male:true
}
console.log(`${persona.firstname} ${persona.male}`)