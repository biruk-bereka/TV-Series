import Api from './api.js';

export const commentCounter = (comments) => (comments.length > 0 ? comments.length : 0);

const comment = async (id) => {
  const movie = await Api.getMovie(id);
  const commentPopup = document.createElement('section');
  const main = document.querySelector('main');
  main.classList.toggle('blur');
  document.body.appendChild(commentPopup);
  commentPopup.classList.toggle('popup');
  commentPopup.innerHTML = `
    <div class="comment-container">
    <button class="close">
    <span class="material-symbols-outlined">close</span>
    </button>
    <div class="popup-header">
      <div class="header">
        <img id="movie-image" src="${movie.image.original}" alt="movie image" />
        <h2 class="title movie-title">${movie.name}</h2>
      </div>
    </div>
    <div class="details">
      ${movie.summary}
    </div>
    <div class="comment-section">
        <div class="previous-comments">
          <h3>Comments <span class="counter">(0)</span></h3>
          <div class="comments"></div>
        </div>  
        <div class="form-container">
        <h3>Add Comment</h3>
        <p class="status"></p>
        <form action="" class="comment-form">
          <li><input type="text" id="name" placeholder="Your name" required/></li>
          <li>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Give us your comments..."
              required
            ></textarea>
          </li>
          <button type="submit" class="comment-btn" id="comment-button">Comment</button>
        </form>
      </div>
    </div>
    
  </div>
   `;

  const displayComments = async (id) => {
    const comments = await Api.getComments(id);
    const commentsContainer = document.querySelector('.comments');
    const counter = commentCounter(comments);
    const counterElement = document.querySelector('.counter');
    counterElement.innerHTML = `(${counter})`;

    commentsContainer.innerHTML = '';
    if (counter > 0) {
      comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        commentsContainer.appendChild(commentElement);
      });
    } else {
      commentsContainer.innerHTML = 'No comments.';
    }
  };

  displayComments(id);

  const form = document.querySelector('.comment-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const status = await Api.addComment(id, name, comment);
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';

    const statusUpdate = document.querySelector('.status');
    statusUpdate.innerHTML = `Comment ${status} Successfully!`;
    statusUpdate.style.display = 'block';
    statusUpdate.style.backgroundColor = '#39d42e';
    setTimeout(() => {
      statusUpdate.style.display = 'none';
    }, 3000);
    if (status === 'Created') {
      displayComments(id);
    }
  });
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    commentPopup.remove();
    main.classList.toggle('blur');
  });
};

export default comment;
