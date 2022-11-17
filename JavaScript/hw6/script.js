"use strict";

function checkAge(age) {
  if (age > 16) return true;
}
let age = prompt("Сколько вам лет?", 16);
if (checkAge(age)) {
  alert("добро пожаловать");
} else {
  alert("вы еще молоды");
}
