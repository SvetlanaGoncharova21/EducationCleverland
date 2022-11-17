"use strict";

let checkSum = (num1, num2) => {
  let sum = 0;
  while (num1 <= num2) {
    sum += num1;
    num1++;
  }
  return sum;
};
let num1 = +prompt("введите первое число", "");
let num2 = +prompt("введите второе число", "");

alert(checkSum(num1, num2));
