"use strict";

let number = "12.5";
let _num = Number(number);

let num = "245";
let $num = Number(num);

let hi = "Hello";

let value = "undefined";

let value_1 = null;

let value_2 = "true";
value_2 = false;

let value_3 = Symbol(1, 5, 7, 12, 3, "значение");

let first_name = { Вася: "Имя" };

let x = function () {};

console.log(typeof _num);
console.log(typeof $num);
console.log(typeof hi);
console.log(typeof undefined);
console.log(typeof value_1);
console.log(typeof value_2);
console.log(typeof value_3);
console.log(typeof first_name);
console.log(typeof x);
