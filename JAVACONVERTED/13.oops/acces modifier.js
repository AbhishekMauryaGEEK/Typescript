"use strict";
class People {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getProfile() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}
class Human extends People {
    constructor(name, age, email) {
        super(name, age, email);
    }
    getEmail() {
        return this.email;
    }
}
const john = new People("John", 20, "john@example.com");
console.log(john);
console.log(john.getProfile());
const abhishek = new Human("Abhishek", 34, 54);
console.log(abhishek);
console.log(abhishek.getEmail());
