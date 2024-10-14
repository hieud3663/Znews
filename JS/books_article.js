let scrollAmount = 0;
const width_article_list = document.querySelector('.article-list').offsetWidth;


function moveRight() {
  const grid = document.querySelector('.container');
  grid.scrollBy({ left: width_article_list, behavior: 'smooth' });
}

function moveLeft() {
  const grid = document.querySelector('.container');
  grid.scrollBy({ left: -width_article_list, behavior: 'smooth' });
  
}