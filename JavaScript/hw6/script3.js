"use strict";

let nameFirst = "Василий";

function hello() {
  if (nameFirst !== "undefined") {
    alert("Привет " + nameFirst);
  } else alert("Привет, гость");
}
hello();
