const modal = document.querySelector('.Forma') // Основной элемент модального окна
const modelClose = modal.querySelector('.forma-button') // Кнопка закрытия внутри модалки

modal.addEventListener('click', (e) => {
    // Закрываем модалку в двух случаях:
})
modelClose.addEventListener('click', () => {
  // Прокрутка наверх с плавной анимацией
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
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

const toggleHeader = document.querySelector('.header-btn')
const menuHeader = document.querySelector('.header-menu')

toggleHeader.addEventListener('click', function() {
  menuHeader.style.display = menuHeader.style.display === 'block' ? 'none' : 'block';
});

menuHeader.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', function() {
    toggleHeader.textContent = this.textContent;
    
    menuHeader.style.display = 'none';

    console.log('Выбрано:', this.dataset.value);
  });
});
 document.addEventListener('click', function(e) {
    if (!e.target.closest('.header-btn')) {
      menuHeader.style.display = 'none';
    }
  });

const toggle = document.querySelector('.poisk-menu')
const menu = document.querySelector('.poisk-menu-sp')

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
    if (!e.target.closest('.poisk-menu')) {
      menu.style.display = 'none';
    }
  });
  