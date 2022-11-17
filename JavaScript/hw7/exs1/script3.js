"use strict";

let getTanDeg = (deg) => (deg * Math.PI) / 180;
let deg = prompt("значение угла в градусах?", "");
let result = getTanDeg(deg);
alert(result);
