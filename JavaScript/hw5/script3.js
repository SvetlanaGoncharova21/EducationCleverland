"use strict";

// let total = 0;
// let input = +prompt();
// while (input) {
//   total += input;
//   input = +prompt();
// }
// alert("Общая сумма чисел равна [" + total + "]");

let sum = 0;
while (true) {
  let number = +prompt("Введите число", "");
  if (!number) break;
  sum += number;
}
alert(`Сумма = ${sum}`);
