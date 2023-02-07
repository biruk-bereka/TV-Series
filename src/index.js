import comment from './modules/comment';
import './css/style.css';

const commentBtn = document.querySelectorAll('.comment');

commentBtn.forEach((btn,index) => {
  btn.addEventListener('click', ()=>{
     comment(index);
  })
})