import Api from './api.js';
import CommentAPI from './commentAPI.js';

const comment = async (id) => {
  const commentAPI = new CommentAPI();
  const comments = await commentAPI.getComments(id);
  if(comments.error){
    console.log("Error")
  }
  else {
    console.log(comments.length);
    comments.forEach(comment => {
      console.log("cm1", comment);
    })
  }
  const movie = await Api.getMovie(id);
  const commentPopup = document.createElement('section');
  document.body.appendChild(commentPopup);
  commentPopup.classList.toggle('popup');
  commentPopup.innerHTML = `
    <div class="comment-container">
    <div class="popup-header">
      <div class="header">
        <img src="${movie.image.original}" alt="movie image" />
        <h2>${movie.name}</h2>
      </div>
      <button class="close">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="details">
      ${movie.summary}
    </div>
    <div class="previous-comments">
      <h3>Comments (2)</h3>
      <p>03/11/2021 Alex: I'd love to buy it</p>
      <p>03/12/2021 Mia: I love</p>
    </div>
    <div class="form-container">
      <h3>Add Comment</h3>
      <form action="" class="comment-form">
        <li><input type="text" id="name" placeholder="Your name" /></li>
        <li>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
          ></textarea>
        </li>
        <button type="submit" class="comment-btn" id="comment-button">Comment</button>
      </form>
    </div>
  </div>
   `;

  const form = document.querySelector('.comment-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentAPI = new CommentAPI();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    commentAPI.addComment(id, name, comment);
  });
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    commentPopup.remove();
  });
};

export default comment;
