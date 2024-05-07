let pushKings = document.querySelector('.kinds__movie-more')
let textpushKings = document.querySelector('.kinds__all-text')
let buttons1Kings = document.querySelectorAll('.hidden-click-768-kinds')
let buttons2Kings = document.querySelectorAll('.hidden-click-1120-kinds')
let statusKings = document.querySelector(
  '.kinds__movie-more .kinds__more-arrow'
)

let clickedKings = false

if (window.innerWidth > 768 && window.innerWidth < 1120) {
  //По условию соответствия размера
  pushKings.addEventListener('click', function () {
    if (!clickedKings) {
      //Если выключен состояние clickedKings при клике на кнопку
      buttons1Kings.forEach(function (element) {
        element.classList.remove('hidden-click-768-kinds') //Если выключен..убрать класс
      })
      buttons2Kings.forEach(function (element) {
        //Если выключен..убрать класс
        element.classList.remove('hidden-click-1120-kinds')
      })
      textpushKings.textContent = 'Скрыть' //Если выключен..сменить текст
      statusKings.classList.remove('open-kinds') //Если выключен..удалить класс
      statusKings.classList.add('closed-kinds') //Если выключен..добавить класс
      clickedKings = true //Если выключен..сменить индикатор в переменной
    } else {
      //Если включено состояние clickedKings при клике на кнопку
      buttons1Kings.forEach(function (element) {
        element.classList.add('hidden-click-768-kinds') //Если вывключен..добавить класс
      })
      buttons2Kings.forEach(function (element) {
        element.classList.add('hidden-click-1120-kinds') //Если вывключен..добавить класс
      })
      textpushKings.textContent = 'Показать все' //Если включен..сменить текст
      statusKings.classList.remove('closed-kinds') //Если включен..удалить класс
      statusKings.classList.add('open-kinds') //Если включен..добавить класс
      clickedKings = false //Если включен сменить состояние clickedKings при клике на кнопку
    }
  })
} else if (window.innerWidth > 1120) {
  //По условию соответствия размера
  pushKings.addEventListener('click', function () {
    if (!clickedKings) {
      //Если выключено состояние clickedKings при клике на кнопку
      buttons2Kings.forEach(function (element) {
        element.classList.remove('hidden-click-1120-kinds') //Если выключен..убрать класс
      })
      textpushKings.textContent = 'Скрыть' //Если выключен..сменить текст
      statusKings.classList.remove('open-kinds') //Если выключен..удалить класс
      statusKings.classList.add('closed-kinds') //Если выключен..добавить класс
      clickedKings = true //Если выключен сменить состояние clickedKings при клике на кнопку
    } else {
      //Если включено состояние clickedKings при клике на кнопку
      buttons2Kings.forEach(function (element) {
        element.classList.add('hidden-click-1120-kinds')
      })
      textpushKings.textContent = 'Показать все' //Если включен..сменить текст
      statusKings.classList.remove('closed-kinds') //Если включен..удалить класс
      statusKings.classList.add('open-kinds') //Если включен..добавить класс
      clickedKings = false //Если включен сменить состояние clickedKings при клике на кнопку
    }
  })
}
