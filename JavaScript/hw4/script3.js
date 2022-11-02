"use strict";

let month = prompt("Введите номер месяца", "");

if (month == 12 || month <= 2) alert("зима");
if ((month >= 3) & (month <= 5)) alert("весна");
if ((month >= 6) & (month <= 8)) alert("лето");
if ((month >= 9) & (month <= 11)) alert("осень");
