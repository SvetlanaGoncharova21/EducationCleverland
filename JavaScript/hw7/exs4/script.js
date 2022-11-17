"use strict";

function newBuy(price, sumInCash) {
  if (price < sumInCash) {
    let result;
    result = sumInCash - price;
    return alert(result);
  } else if (price > sumInCash) {
    return alert("Недостаточная сумма для оплаты");
  }
}
let price = +prompt("стоимость покупки", "");
let sumInCash = +prompt("сумма внесенная в кассу", "");

newBuy(price, sumInCash);
