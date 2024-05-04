let pushTextMore = document.querySelector('.nav-info__movie-more')
let changeText = document.querySelectorAll('.nav-info__text-field')
let textHeight = document.querySelector('.nav-info__information-text')
let blockTextHeight = document.querySelector('.nav-info__informaion')
let imagePseudoEl = document.querySelector('.nav-info__all-text')
let status1 = document.querySelector(
  '.nav-info__movie-more .nav-info__more-arrow'
)
let checkPushTextMore = false

//
function textMoreFalse() {
  if (window.innerWidth < 768) {
    changeText.forEach(function (element) {
      element.innerHTML =
        'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br /><br />Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.'
      // changeText.forEach(function (element) {
      //   element.style.maxHeight = "365px";
      // });
      // textHeight.style.maxHeight = "389px";
    })
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    changeText.forEach(function (element) {
      element.innerHTML =
        'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br /><br />Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.'
      // changeText.forEach(function (element) {
      //   element.style.maxHeight = "260px";
      // });
      // textHeight.style.maxHeight = "284px";
    })
  } else {
    changeText.forEach(function (element) {
      element.innerHTML =
        'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br /><br />Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.Наша команда профессионалов также специализируется на обслуживании других моделей ноутбуков и устройств Dell. Мы предлагаем широкий спектр услуг, включая замену компонентов, устранение проблем с программным обеспечением, настройку и многое другое. Наше инновационное оборудование и ноу-хау позволяют нам обеспечить качественный и надежный ремонт, чтобы ваша техника Dell служила вам долгие годы'
      // changeText.forEach(function (element) {
      //   element.style.maxHeight = "398px";
      // });
      // textHeight.style.maxHeight = "402px";
    })
  }

  status1.classList.remove('open-image') //Если выключен..удалить класс
  status1.classList.add('closed-image') //Если выключен..добавить класс

  imagePseudoEl.innerHTML = 'Скрыть'
  // checkPushTextMore = true;
}
//
//
function textMoreTrue() {
  if (window.innerWidth < 768) {
    changeText.forEach(function (element) {
      element.innerHTML =
        'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.'

      // changeText.forEach(function (element) {
      //   element.style.maxHeight = "90px";
      // });
      // textHeight.style.maxHeight = "122px";
    })
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    changeText.forEach(function (element) {
      element.innerHTML =
        'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br /><br />Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера'
      // changeText.forEach(function (element) {
      //   element.style.maxHeight = "160px";
      // });
      // textHeight.style.maxHeight = "192px";
    })
  } else {
    changeText.forEach(function (element) {
      element.innerHTML =
        'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br /><br />Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.'
      // changeText.forEach(function (element) {
      //   element.style.maxHeight = "160px";
      // });
      // textHeight.maxHeight = "192px";
    })
  }

  status1.classList.remove('closed-image') //Если выключен..добавить класс
  status1.classList.add('open-image') //Если выключен..удалить класс

  imagePseudoEl.innerHTML = 'Читать далее'
  // checkPushTextMore = false;
}
//

function changeTextMoreResize() {
  if (!checkPushTextMore) {
    textMoreTrue()
  } else {
    textMoreFalse()
  }
}

function changeTextMore() {
  if (!checkPushTextMore) {
    textMoreFalse()
    checkPushTextMore = true
  } else {
    textMoreTrue()
    checkPushTextMore = false
  }
}

pushTextMore.addEventListener('click', changeTextMore)
window.addEventListener('resize', changeTextMoreResize)
