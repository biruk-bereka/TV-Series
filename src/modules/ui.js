import Api from './api.js';

const listItems = document.querySelector('#list-items');
const homeLink = document.querySelector('#home');

const displayFilms = async () => {
  // Get the series from the API
  const data = await Api.getFilms();
  // Count the series
  const filmsCount = data.length;
  // Update the home link accordingly
  homeLink.innerHTML = `TV Series (${filmsCount})`;
  let items = ``;
  data.forEach((film, index) => {
    items += `
    <article class="item">
      <img src="${film.image.original}" alt="">
          <div class="title">
          <span class="film">${film.name}</span>
          <button class="like-btn">
          <span data-id="${film.id}" class="material-symbols-outlined">favorite</span>
          </button>
          <span class="like"> 5 likes</span>
          </div>
          <button data-id="${film.id}" class="comment-btn">Comment</button>
    </article>
    `;
    listItems.innerHTML = items;
  });
};

displayFilms();
