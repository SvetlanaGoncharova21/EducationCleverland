"use strict";

const t0 = Date.now();
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
alert(sumTo(1000000));

const t1 = Date.now();
console.log(t1 - t0, "milliseconds");
