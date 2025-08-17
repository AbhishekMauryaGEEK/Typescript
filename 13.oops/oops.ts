class people {
   name:string;
   age:number;
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;
    }
}
const People=new people("john",20);
console.log(People);