"use strict";
const add = (a, b) => a + b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;
const sub = (a, b) => a - b;
console.log(`sum :${add(2, 5)}\nmultiplication:${multi(34, 5)}\ndivision:${div(78, 4)}\nsubtract:${sub(78, 56)}`);
const pvr = {
    name: "f1",
    genre: "action",
    rating: 8.1
};
console.log(pvr);
const firsth = {
    name: "abhi",
    age: 21,
    gender: "male",
    world() {
        console.log("say hello");
    }
};
function hello(human1) {
    console.log(`hello,${human1.name}`);
    human1.world();
}
console.log(firsth);
hello(firsth);
