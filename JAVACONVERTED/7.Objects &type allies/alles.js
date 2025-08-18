"use strict";
const printUserinfo = (user) => {
    return `Name:(${user.name}) age:(${user.age}) location:(${user.location})`;
};
const ans = printUserinfo({ name: "alex", age: 20, location: "india" });
console.log(ans);
const akoi = {
    name: "abhi",
    location: "india"
};
console.log(`name:${akoi.name} age:${akoi.location}`);
