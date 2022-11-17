"use strict";

let nameFirst = prompt("Введите имя");

function hello() {
  if (nameFirst) {
    alert("Привет " + nameFirst);
  } else alert("Привет, гость");
}
hello();
