"use strict";

let salary = {
  Ivanov: 100,
  popov: 200,
  Smirnov: 300,
  Smith: 400,
  Goncharova: 500,
  Shinkareva: 600,
  Lapko: 700,
  Rubanov: 800,
  Krasnov: 900,
  Ivancov: 1000,
};

let obj = {};
for (let key in salary) {
  obj[key] = salary[key];
}

let averageSalary = () => {
  let sum = 0;
  let srsum = 0;
  let amount = 0;
  for (let i in salary) {
    sum += salary[i];
    amount++;
  }
  srsum = Math.round(sum / amount);
  return srsum;
};

salary["average Salary"] = averageSalary();

let numberPeople = () => {
  let numeric = 0;
  for (let j in salary) {
    if (salary[j] >= salary["average Salary"] && j != "average Salary") {
      numeric += 1;
    }
  }
  return numeric;
};

salary["People with average salary"] = numberPeople();

alert(`Свойства у объекта salary:  ${Object.values(salary)}`);
