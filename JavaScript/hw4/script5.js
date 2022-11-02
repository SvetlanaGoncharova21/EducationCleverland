"use strict";

let a = 8,
  b = 3;

if (a > b) {
  alert(1);
} else if (b > a) {
  alert(2);
} else if ((a = b)) {
  alert(0);
}
