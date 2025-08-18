"use strict";
function examplefunction(value) {
    if (typeof value === "string") {
        console.log(value.toLocaleLowerCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
examplefunction("FDFGSEDGDSRFGER");
examplefunction(234);
class dog {
    bark() {
        console.log("woof");
    }
}
class cat {
    meow() {
        console.log("meow");
    }
}
function animalsound(animal) {
    if (animal instanceof dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const mydog = new dog();
const mycat = new cat();
animalsound(mydog);
animalsound(mycat);
