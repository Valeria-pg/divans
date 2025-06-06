
const popup = document.querySelector('.popup') 
const popupOpen = document.querySelector('.footer-button') 
const popupClose = popup.querySelector('.popup-close')

console.log(popup);

popupOpen.addEventListener('click', () => {
    popup.style.display = 'block' 
})
popup.addEventListener('click', (e) => {
    if ( e.target.closest('.popup-button') || e.target.classList.contains('popup-close')) {
        popup.style.display = 'none'
    }
})
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const toggle = document.querySelector('.header-btn')
const menu = document.querySelector('.header-menu')

toggle.addEventListener('click', function() {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

menu.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', function() {
    toggle.textContent = this.textContent;
    
    menu.style.display = 'none';

    console.log('Выбрано:', this.dataset.value);
  });
});
 document.addEventListener('click', function(e) {
    if (!e.target.closest('.header-btn')) {
      menu.style.display = 'none';
    }
  });