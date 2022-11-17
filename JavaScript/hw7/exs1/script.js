"use strict";

function getTanDeg(deg) {
  let rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}

let deg = prompt("значение угла в градусах?", "");
let result = getTanDeg(deg);
alert(result);
