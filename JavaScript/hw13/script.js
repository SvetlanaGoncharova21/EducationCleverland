"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img");
const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre");
const movieList = document.querySelector(".promo__interactive-list");

adv.forEach((item) => {
  item.remove();
});

poster.style.backgroundImage = 'url("img/bg.jpg")';

genre.textContent = "драма";

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
  movieList.innerHTML += `<li class="promo__interactive-item">
  ${index + 1} ${film}
  <div class="delete"></div>
</li>`;
});
