"use strict";
let whidth = 1024;
let margin = 5 * 2;
let quantityImg = prompt("Сколько изображений Вы хотите разместить?", 4);
let whidthImg = prompt("Какова ширина Ваших изображений в пикселях?", 246);
let quantityImgInRow = Math.floor(whidth / (+whidthImg + margin));
let rows = Math.floor(quantityImg / quantityImgInRow);
let imgLastRow = quantityImg - quantityImgInRow * rows || quantityImgInRow;
alert(`ширина окна 1024px,
итого Ваших изображений ${quantityImg},
ширина каждого изображения ${whidthImg},
количество изображений в каждом ряду ${quantityImgInRow}, 
полных рядов в галерее  ${rows},
количество изображений в последнем ряду ${imgLastRow}`);
