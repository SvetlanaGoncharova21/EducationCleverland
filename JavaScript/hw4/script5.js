"use strict";

let a = prompt("Введите первое число", "");
let b = prompt("Введите второе число", "");

if (a > b) {
  alert(1);
} else if (b > a) {
  alert(2);
} else if ((a = b)) {
  alert(0);
}
