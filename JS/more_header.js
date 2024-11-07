

const ele = document.querySelector('.more');
const popup = document.querySelector('.cagory_popup')
const backdrop = document.querySelector('.backdrop')

 function menu() {
  // Kiểm tra nếu class 'active' đã tồn tại
  if (popup.classList.contains('active') && backdrop.classList.contains('backdrop_active')) {
    // Nếu đã tồn tại, xóa class 'active'
    popup.classList.remove('active');
    backdrop.classList.replace('backdrop_active', 'backdrop')
  } else {
    // Nếu chưa tồn tại, thêm class 'active'
    popup.classList.add('active');
    backdrop.classList.replace('backdrop', 'backdrop_active')
  }
  console.log("test");
}


ele.addEventListener('click',  menu);
backdrop.addEventListener('click', menu);

//khi nhấn vào nút search-button thì hiện ra thanh search
// const searchButton = document.querySelector('#search-box');
const search = document.querySelector('#search-box');
const searchText = document.querySelector('#search-text');

function searchMenu() {
  // Kiểm tra nếu class 'active-current' đã
  if (search.classList.contains('active-current') & searchText.classList.contains('active-current')) {
    // Nếu đã tồn tại, xóa class 'active-current'
    search.classList.remove('active-current');
    searchText.classList.remove('active-current');

  } else {
    // Nếu chưa tồn tại, thêm class 'active-current'
    search.classList.add('active-current');
    searchText.classList.add('active-current');
  }
}

document.querySelectorAll('.article-thumbnail a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('trang-bao.html?src=' + encodeURIComponent(this.href), '_blank');
  });
});


document.querySelectorAll('.article-title a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('trang-bao.html?src=' + encodeURIComponent(this.href), '_blank');
  });
});

document.querySelectorAll('.article a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('trang-bao.html?src=' + encodeURIComponent(this.href), '_blank');
  });
});
document.querySelectorAll('.info a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('trang-bao.html?src=' + encodeURIComponent(this.href), '_blank');
  });
});
