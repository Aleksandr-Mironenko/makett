let pushBugrer = document.querySelector('.container-header__burger')
let pushBurgerLeft = document.querySelector('.left__header-burger')

let containerHeader = document.querySelector('.container-header')
let pushDocument = document.querySelector('.body-container')
let navInfo = document.querySelector('.nav-info')
let brends = document.querySelector('.brends')
let kinds = document.querySelector('.kinds')
let price = document.querySelector('.price')
let footer = document.querySelector('.footer')
let containerLeft = document.querySelector('.left')

let clicked = false

function showContent() {
  // открываем левый блок
  containerLeft.classList.remove('left-hidden')
  containerHeader.classList.add('opacity')
  navInfo.classList.add('opacity')
  brends.classList.add('opacity')
  kinds.classList.add('opacity')
  price.classList.add('opacity')
  footer.classList.add('opacity')

  clicked = true
}

function hideContent() {
  //закрываем левый блок
  containerLeft.classList.add('left-hidden')
  containerHeader.classList.remove('opacity')
  navInfo.classList.remove('opacity')
  brends.classList.remove('opacity')
  kinds.classList.remove('opacity')
  price.classList.remove('opacity')
  footer.classList.remove('opacity')

  clicked = false
}

function handleButtonClick() {
  if (window.innerWidth < 1440) {
    // при изменении экран меньше указанного размера
    if (!clicked) {
      // и не открытый левый блок
      showContent() // показываем
    } else {
      // закрытый левый блок
      hideContent() // скрываем
    }
  }
}

function handleResize() {
  if (window.innerWidth > 1440 && clicked) {
    // если потребуется скрыть при достижении какого-либо размера. не понял нужно или нет
    hideContent()
  }
}

function bodyClick(event) {
  if (
    clicked &&
    !containerLeft.contains(event.target) &&
    !pushBugrer.contains(event.target)
  ) {
    hideContent()
  }
}

pushDocument.addEventListener('click', bodyClick)
pushBugrer.addEventListener('click', handleButtonClick)
pushBurgerLeft.addEventListener('click', hideContent)
window.addEventListener('resize', handleResize) //
