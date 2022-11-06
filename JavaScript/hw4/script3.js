"use strict";

let month = prompt("Введите номер месяца", "");

if (month == 12 || (month <= 2) & (month != 0)) alert("зима");
if ((month >= 3) & (month <= 5) & (month != 0)) alert("весна");
if ((month >= 6) & (month <= 8) & (month != 0)) alert("лето");
if ((month >= 9) & (month <= 11) & (month != 0)) alert("осень");
