"use strict";

let person = {
  surname: "Гончарова",
  name: "Светлана",
  middleName: "Александровна",
  yearOfBirth: 1991,
  profession: "Банковская деятельность",
  function: "Экономист",
  experience: 7,
};

let obj = {};
for (let key in person) {
  obj[key] = person[key];
}

delete person.middleName;

if (person.middleName) {
  alert(person.middleName);
} else {
  alert("не существует");
}

alert(
  `оставшееся количество свойств у объекта person:  ${Object.values(person)}`
);

let amountNum = () => {
  let sum = 0;
  for (let key in person) {
    if (typeof person[key] === "number") {
      sum++;
    }
  }
  return sum;
};
alert("количество свойств, которые являются числа: ${amountNum()}");
