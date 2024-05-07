let swiper = false

function initSwiper() {
  swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

function destroySwiper() {
  if (swiper && swiper instanceof Swiper) {
    swiper.destroy(true, true)
    swiper = null
  }
}

function checkScreenWidth() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      initSwiper() // Вызов функции initSwiper() при необходимости
    }
  } else {
    destroySwiper(true, true) //Вызов функции destroySwiper() при необходимости
  }
}

function handleResize() {
  checkScreenWidth()
}

// Проверяем ширину экрана при загрузке страницы
checkScreenWidth()

// Обработчик события изменения размера окна
window.addEventListener('resize', handleResize)
