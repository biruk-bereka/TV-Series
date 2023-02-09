import Api from './api.js';
import { itemsCounter, likesCounter } from './functionalities.js';
import comment from './comment.js';
import logo from '../assets/logo.png';

const listItems = document.querySelector('#list-items');
const homeLink = document.querySelector('#home');
const logoImg = document.querySelector('#logo');
logoImg.src = logo;

const displaySeries = async (genreSeries = null) => {
  const loader = document.querySelector('#loader');
  loader.classList.add('display');
  // Get the series from the API
  const data = await Api.getSeries();
  // Display only 21
  let series;
  if (genreSeries === null) {
    series = data.slice(0, 21);
  } else {
    series = genreSeries;
  }
  loader.classList.remove('display');
  // Count the series
  const seriesCount = itemsCounter(series);
  // Update the home link accordingly
  homeLink.innerHTML = `TV Series(${seriesCount})`;

  let items = '';
  series.forEach(async (film) => {
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
    target.classList.add('liked');
    const { id: itemId } = target.dataset;
    const response = await Api.addNewLike(+itemId);
    if (response === 201) {
      const nbLikes = await likesCounter(+itemId);
      // Update the likes
      const parent = target.parentElement;
      const likes = parent.nextElementSibling;
      likes.innerHTML = nbLikes === 1 ? `${nbLikes} like` : `${nbLikes} likes`;
    }
  }

  if (target.classList.contains('comment-btn')) {
    const { id: itemId } = target.dataset;
    comment(itemId);
  }
});

const selectMenu = (genre) => {
  const menuItems = document.querySelectorAll('#nav-items li a');
  menuItems.forEach((link) => {
    if (link.classList.contains(genre)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

const navItems = document.getElementById('nav-items');
navItems.addEventListener('click', async (event) => {
  const { target } = event;
  const genreClass = target.classList[0];
  selectMenu(genreClass);
  const genre = genreClass.charAt(0).toUpperCase() + genreClass.slice(1);

  if (genre === 'All') {
    displaySeries();
  } else {
    const data = await Api.getSeries();
    const series = data.slice(0, 21);
    const filterdSeries = series.filter((movie) => movie.genres.includes(genre));
    displaySeries(filterdSeries);
  }
});

displaySeries();
