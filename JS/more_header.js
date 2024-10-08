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

