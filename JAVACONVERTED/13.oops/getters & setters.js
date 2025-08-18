"use strict";
class Student {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length < 2) {
            throw new Error("Name is too short.");
        }
        this._name = newName;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge <= 0 || newAge > 120) {
            throw new Error("Invalid age.");
        }
        this._age = newAge;
    }
    get profile() {
        return `Name: ${this._name}, Age: ${this._age}`;
    }
}
const s = new Student("Abhi", 21);
console.log(s.profile);
s.name = "Maurya";
s.age = 22;
console.log(s.profile);
