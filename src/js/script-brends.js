let pushBrends = document.querySelector('.brends__movie-more')
let textPushBrends = document.querySelector('.brends__all-text')
let buttons1Brends = document.querySelectorAll('.hidden-click-768-brends')
let buttons2Brends = document.querySelectorAll('.hidden-click-1120-brends')
let statusBrends = document.querySelector(
  '.brends__movie-more .brends__more-arrow'
)

let clickedBrends = false

if (window.innerWidth > 768 && window.innerWidth < 1120) {
  //По условию соответствия размера
  pushBrends.addEventListener('click', function () {
    if (!clickedBrends) {
      //Если выключен состояние clickedBrends при клике на кнопку
      buttons1Brends.forEach(function (element) {
        element.classList.remove('hidden-click-768-brends') //Если выключен..убрать класс
      })
      buttons2Brends.forEach(function (element) {
        //Если выключен..убрать класс
        element.classList.remove('hidden-click-1120-brends')
      })
      textPushBrends.textContent = 'Скрыть' //Если выключен..сменить текст
      statusBrends.classList.remove('open-brends') //Если выключен..удалить класс
      statusBrends.classList.add('closed-brends') //Если выключен..добавить класс
      clickedBrends = true //Если выключен..сменить индикатор в переменной
    } else {
      //Если включено состояние clickedBrends при клике на кнопку
      buttons1Brends.forEach(function (element) {
        element.classList.add('hidden-click-768-brends') //Если вывключен..добавить класс
      })
      buttons2Brends.forEach(function (element) {
        element.classList.add('hidden-click-1120-brends') //Если вывключен..добавить класс
      })
      textPushBrends.textContent = 'Показать все' //Если включен..сменить текст
      statusBrends.classList.remove('closed-brends') //Если включен..удалить класс
      statusBrends.classList.add('open-brends') //Если включен..добавить класс
      clickedBrends = false //Если включен сменить состояние clickedBrends при клике на кнопку
    }
  })
} else if (window.innerWidth > 1120) {
  //По условию соответствия размера
  pushBrends.addEventListener('click', function () {
    if (!clickedBrends) {
      //Если выключено состояние clickedBrends при клике на кнопку
      buttons2Brends.forEach(function (element) {
        element.classList.remove('hidden-click-1120-brends') //Если выключен..убрать класс
      })
      textPushBrends.textContent = 'Скрыть' //Если выключен..сменить текст
      statusBrends.classList.remove('open-brends') //Если выключен..удалить класс
      statusBrends.classList.add('closed-brends') //Если выключен..добавить класс
      clickedBrends = true //Если выключен сменить состояние clickedBrends при клике на кнопку
    } else {
      //Если включено состояние clickedBrends при клике на кнопку
      buttons2Brends.forEach(function (element) {
        element.classList.add('hidden-click-1120-brends')
      })
      textPushBrends.textContent = 'Показать все' //Если включен..сменить текст
      statusBrends.classList.remove('closed-brends') //Если включен..удалить класс
      statusBrends.classList.add('open-brends') //Если включен..добавить класс
      clickedBrends = false //Если включен сменить состояние clickedBrends при клике на кнопку
    }
  })
}
