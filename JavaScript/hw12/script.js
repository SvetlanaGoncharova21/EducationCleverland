"use strict";

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];

  row.cells[i].style.backgroundColor = "red";

  row.cells[table.rows.length - (i + 1)].style.backgroundColor = "red";
}
