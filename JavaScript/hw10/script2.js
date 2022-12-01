"use strict";

let arr = [2, -15, 12, 83, -29, 111, -6, 22];

let b = arr.findIndex((item) => {
  if (item > 99) {
    return true;
  }
});

console.log(b);

let с = arr.find((item) => {
  if (item % 5 == 0) {
    return true;
  }
});

console.log(с);

let positNum = arr.filter((item) => item >= 0);
console.log(positNum);

arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

arr.reverse();
console.log(arr);

let x = arr.reduce((total, amount) => total * amount);
console.log(x);

let num = arr.reduce((a, b) => a + b) / arr.length;
console.log(num);
