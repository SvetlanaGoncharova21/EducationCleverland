"use strict";

let num = prompt("Введите любое число", "");

if (num == 0) {
  alert("Ваше число равно 0");
} else if (num < 0) {
  alert("Ваше число отрицательное");
} else if (num > 0) {
  alert("Ваше число положительное");
}
