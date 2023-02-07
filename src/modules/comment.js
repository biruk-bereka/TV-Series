import CommentAPI from "./commentAPI.js";

const comment = () => {
  const main = document.querySelector('main');
  main.classList.toggle('blur');
  const commentPopup = document.createElement("section");
  document.body.appendChild(commentPopup);
  commentPopup.classList.toggle("popup");
  commentPopup.innerHTML = `
    <div class="comment-container">
    <div class="popup-header">
      <div class="header">
        <img src="./assets/images/4600.jpg" alt="movie image" />
        <h2>Title</h2>
      </div>
      <button class="close">
        <span class="material-icons-two-tone"> close </span>
      </button>
    </div>
    <div class="details">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
        quia atque ea nam? Quisquam tempora repellendus vitae quibusdam
      </p>
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
        <button type="submit" class="comment-btn">Comment</button>
      </form>
    </div>
  </div>
   `;

  const form = document.querySelector('.comment-form');
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
        
  })
   const closeButton = document.querySelector('.close');
   closeButton.addEventListener('click', ()=>{
     commentPopup.remove(); 
     main.classList.toggle('blur');
   })
};

export default comment;
