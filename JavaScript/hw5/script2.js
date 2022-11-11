"use strict";

const n = +prompt("Введите число");
for (let i = 2; i < n; i += 2) {
  if (i % 5 == 0) continue;
  alert(i);
}
