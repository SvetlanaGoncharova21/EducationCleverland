"use strict";

let num = prompt("Введите любое число", 0);

if (num == 0) {
  message = "Ваше число равно 0!";
} else if (num < 0) {
  message = "Ваше число отрицательное!";
} else if (num > 0) {
  message = "Ваше число положительное!";
}
alert(message);
