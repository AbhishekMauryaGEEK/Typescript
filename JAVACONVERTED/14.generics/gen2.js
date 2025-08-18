"use strict";
function filterarray(array, condition) {
    return array.filter((item) => condition(item));
}
const numarray = [4, 5, 6, 6, 3, 2, 6, 7, 2, 1, 43, 54, 543, 23, 65, 7632, 56, 12, 4];
const evennum = filterarray(numarray, (num) => num % 2 === 0);
console.log(evennum);
const strarr = ["apple", "banana", "mango", "dates"];
const small = filterarray(strarr, (word) => word.length <= 5);
console.log(small);
const fruitarr = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "chery", color: "red" }
];
const redfru = filterarray(fruitarr, (fruit) => fruit.color === "red");
console.log(redfru);
function reversepair(value1, value2) {
    return [value2, value1];
}
const revered = reversepair("hello", 3);
console.log(revered);
