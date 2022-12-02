"use strict";

const date = new Date();
alert(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());

const now = new Date();
const result = Math.ceil(now.getTime() / (1000 * 60));
alert(result);

const nowTwo = new Date();
const nowNow = nowTwo.getTime();
const resultTwo = Date.parse("2022-10-27T00:00:00");
const final = Math.floor((nowNow - resultTwo) / (1000 * 60 * 60));
alert(final);
