"use strict";

let date = new Date();
let h = date.getHours();

let nameF = prompt("Ваше имя?", "");

switch (h) {
  case h < 10:
    alert("Доброе утро!" + nameF);
    break;
  case h >= 10 && h < 16:
    alert("Добрый день!" + nameF);
    break;
  case h >= 16 && h < 20:
    alert("Добрый вечер!" + nameF);
    break;
  default:
    alert("Доброй ночи!" + nameF);
}
