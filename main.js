const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 1; // Начинаем с центрального слайда

// Функция обновления слайдов
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'left', 'center', 'right');
    
    if (index === currentIndex) {
      slide.classList.add('active', 'center');
    } else if (index === (currentIndex + 1) % 3) {
      slide.classList.add('right');
    } else {
      slide.classList.add('left');
    }
  });
}

// Переключение вперед
function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  updateSlides();
}

// Переключение назад
function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateSlides();
}

// Автопрокрутка каждые 3 секунды
setInterval(nextSlide, 3000);

// Кнопки управления
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Инициализация
updateSlides();



    const slidesPromo = document.querySelectorAll('.promo-photo');
  const slidesContainer = document.querySelector('.promo-photo-slides');
  console.log(slidesPromo);
  
  
  let currentIndexPro = 0;
  const totalSlides = slidesPromo.length;
  
  function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentIndexPro * 100}%)`;
    slidesPromo.forEach(slide => slide.classList.remove('active-promo'));
    slidesPromo[currentIndexPro].classList.add('active-promo');
  };

  setInterval(() => {
    currentIndexPro = (currentIndexPro + 1) % totalSlides;
    updateSlider();
  }, 3000);

// попап

const modal = document.querySelector('.Forma') // Основной элемент модального окна
const modelClose = modal.querySelector('.forma-button') // Кнопка закрытия внутри модалки

modal.addEventListener('click', (e) => {
})
modelClose.addEventListener('click', () => {
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

