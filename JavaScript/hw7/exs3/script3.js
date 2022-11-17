"use strict";

let calFactorial = (x) => {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result = result * i;
  }
  return result;
};
let x = +prompt("введите число", "");
alert(calFactorial(x));
