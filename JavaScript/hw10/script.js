"use strict";

let fruits = ["Яблоко", "Апельсин", "Слива"];

fruits.push("Абрикос");
alert(fruits);

fruits.unshift("Нектарин", "Персик");
alert(fruits);

fruits.splice(2, 2);
alert(fruits);

let favoriteFruits = fruits.slice(0, 3);
alert(favoriteFruits);

let berries = ["Барбарис", "Виноград", "Годжи"];
fruits = fruits.concat(berries);
alert(fruits);
alert(fruits.length);

favoriteFruits.forEach(function (elem, index) {
  alert(index + ". " + elem);
});

alert(fruits.indexOf("Слива"));
alert(fruits.indexOf("Яблоко"));
