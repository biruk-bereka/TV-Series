import Api from './api.js';

const listItems = document.querySelector('#list-items');
const displayFilms = async () => {
  const data = await Api.getFilms();
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
          <button class="comment-btn">Comment</button>
    </article>
    `;
    listItems.innerHTML = items;
  });
};

displayFilms();
