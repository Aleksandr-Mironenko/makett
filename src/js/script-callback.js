let pushCallbackLeftContainerCall = document.querySelector('.left__call')
let pushCallbackHeaderCall = document.querySelector(
  '.container-header__hidden-call'
)
let addCallback = document.querySelector('.callback')
let pushClosedCallback = document.querySelector('.callback__header-button')
let pushDocumentCallback = document.querySelector('.body-container')
let leftDocumentCallback = document.querySelector('.left')

let clickedCallback = false

function showCallback() {
  //открывает блок Callback и скрывает оставшиеся блоки в зависимости от открытого левого контейнера
  addCallback.classList.remove('callback-hidden')

  if (clickedCallback) {
    leftDocumentCallback.classList.add('opacity-left')
  } else {
    pushDocumentCallback.classList.add('opacity')
  }
  clickedCallback = true
}

function hideCallback() {
  //скрытие блока Callback и открывает оставшиеся блоки в зависимости от открытого левого контейнера
  addCallback.classList.add('callback-hidden')

  if (!clickedCallback) {
    leftDocumentCallback.classList.remove('opacity-left')
  } else {
    pushDocumentCallback.classList.remove('opacity')
  }
  clickedCallback = false
}

function bodyClickCallback(event) {
  //
  if (
    clickedCallback &&
    !addCallback.contains(event.target) &&
    !pushCallbackHeaderCall.contains(event.target) &&
    !pushCallbackLeftContainerCall.contains(event.target)
  ) {
    hideCallback()
  }
}

pushCallbackHeaderCall.addEventListener('click', showCallback)
pushCallbackLeftContainerCall.addEventListener('click', showCallback)
pushClosedCallback.addEventListener('click', hideCallback)
pushDocumentCallback.addEventListener('click', bodyClickCallback)
leftDocumentCallback.addEventListener('click', bodyClickCallback)
