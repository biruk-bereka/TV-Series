import Api from './api.js';
import { itemsCounter, likesCounter } from './functionalities.js';
import comment, { commentCounter } from './comment.js';
import logo from '../assets/logo.png';

const listItems = document.querySelector('#list-items');
const homeLink = document.querySelector('#home');
const logoImg = document.querySelector('#logo');
logoImg.src = logo;

let seriesTmp = [];

const displaySeries = async (genreSeries = seriesTmp) => {
  const seriesCount = itemsCounter(genreSeries);
  // Update the home link accordingly
  homeLink.innerHTML = `TV Series(${seriesCount})`;
  let items = '';
  genreSeries.forEach(async (film) => {
    const nbLikes = await likesCounter(film.id);
    const comments = await Api.getComments(film.id);
    const nbComments = commentCounter(comments);
    items += `
    <article class="item" data-genre="${film.genres.join(',')}">
        <img src="${film.image.original}" alt="">
          <div class="title-box">
            <span class="film">${film.name}</span>
            <button class="like-btn" type="button">
              <span data-id="${film.id}" class="material-symbols-outlined">favorite</span>
              <span class="like"> ${nbLikes}</span>
            </button>
          </div>
        <button data-id="${film.id}" class="comment-btn" type="button">Comment ${nbComments > 0 ? `(${nbComments})` : ''}</button>
    </article>
    `;
    listItems.innerHTML = items;
  });
};

// Ignition
const loadSeries = async () => {
  const loader = document.querySelector('#loader');
  loader.classList.add('display');
  // Get the series from the API
  const data = await Api.getSeries();
  // Display only 21
  seriesTmp = data.slice(0, 21);
  loader.classList.remove('display');
  displaySeries(seriesTmp);
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
      const likes = target.nextElementSibling;
      likes.innerHTML = `${nbLikes}`;
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
  let counterFilter = 0;
  selectMenu(genreClass);
  const genre = genreClass.charAt(0).toUpperCase() + genreClass.slice(1);
  // get all the article
  const articles = document.querySelectorAll('.item');
  articles.forEach((article) => {
    const genres = article.getAttribute('data-genre').split(',');

    if (genres.includes(genre) || genre === 'All') {
      article.style.display = 'flex';
      counterFilter += 1;
    } else {
      article.style.display = 'none';
    }
  });
  // Update the home link accordingly
  homeLink.innerHTML = `TV Series(${counterFilter})`;
});

loadSeries();
