import Api from './api.js';
import { itemsCounter, likesCounter } from './functionalities.js';
import comment from './comment.js';

const listItems = document.querySelector('#list-items');
const homeLink = document.querySelector('#home');

const displaySeries = async () => {
  const loader = document.querySelector('#loader');
  loader.classList.add('display');
  // Get the series from the API
  const data = await Api.getSeries();
  loader.classList.remove('display');
  // Count the series
  const seriesCount = itemsCounter(data);
  // Update the home link accordingly
  homeLink.innerHTML = `TV Series (${seriesCount})`;

  let items = '';
  data.forEach(async (film) => {
    const nbLikes = await likesCounter(film.id);
    items += `
    <article class="item">
        <img src="${film.image.original}" alt="">
          <div class="title">
            <span class="film">${film.name}</span>
            <button class="like-btn" type="button">
            <span data-id="${film.id}" class="material-symbols-outlined">favorite</span>
            </button>
            <span class="like"> ${nbLikes} likes</span>
          </div>
          <button data-id="${film.id}" class="comment-btn" type="button">Comment</button>
    </article>
    `;
    listItems.innerHTML = items;
  });
};

// Event on the list items
listItems.addEventListener('click', async (event) => {
  const { target } = event;
  if (
    target.classList.contains('material-symbols-outlined')
    && !target.classList.contains('liked')
  ) {
    const { id: itemId } = target.dataset;
    const response = await Api.addNewLike(+itemId);
    if (response === 201) {
      const nbLikes = await likesCounter(+itemId);
      // Update the likes
      const parent = target.parentElement;
      target.classList.add('liked');
      const likes = parent.nextElementSibling;
      likes.innerHTML = nbLikes === 1 ? `${nbLikes} like` : `${nbLikes} likes`;
    }
  }

  if (target.classList.contains('comment-btn')) {
    const { id: itemId } = target.dataset;
    comment(itemId);
  }
});

displaySeries();
