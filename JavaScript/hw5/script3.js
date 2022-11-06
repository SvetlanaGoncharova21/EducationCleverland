"use strict";

let total = 0;
let input = +prompt();
while (input) {
  total += input;
  input = +prompt();
}
alert("Общая сумма чисел равна [" + total + "]");
