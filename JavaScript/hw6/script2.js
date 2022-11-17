"use strict";

function checkNumber(number) {
  if (number > 10) {
    let result;
    result = number * number;
    return alert("$(result)");
  } else if (number <= 7) {
    return alert("число меньше 7");
  } else if (number == 8) {
    return alert("8");
  } else if (number == 9) {
    return alert("9");
  }
}
let number = +prompt("число?", 1);
checkNumber(number);
