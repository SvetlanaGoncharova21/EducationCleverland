"use strict";

const first = document.getElementById("first");
const second = document.getElementById("second");
const yellow = document.getElementsByClassName("yellow");
const div = document.querySelectorAll("div");

first.style.backgroundColor = "red";
// document.getElementById("first").style.backgroundColor = "red";

second.style.backgroundColor = "blue";

yellow[0].style.backgroundColor = "yellow";
yellow[2].style.backgroundColor = "yellow";

div[3].style.backgroundColor = "green";
