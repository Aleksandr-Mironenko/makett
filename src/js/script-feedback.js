let pushFeedbackLeftContainerChat = document.querySelector('.left__chat')
let pushFeedbackHeaderChat = document.querySelector(
  '.container-header__hidden-chat'
)
let addFeedback = document.querySelector('.feedback')
let pushClosedFeedback = document.querySelector('.feedback__header-button ')
let pushDocumentFeedback = document.querySelector('.body-container')
let leftDocumentFeedback = document.querySelector('.left')

let clickedFeedback = false

function showFeedback() {
  // открывает блок Feedback и скрывает оставшиеся блоки в зависимости от открытого левого контейнера
  addFeedback.classList.remove('feedback-hidden')

  if (clickedFeedback) {
    leftDocumentFeedback.classList.add('opacity-left')
  } else {
    pushDocumentFeedback.classList.add('opacity')
  }
  clickedFeedback = true
}

function hideFeedback() {
  //скрытие блока Feedback и открывает оставшиеся блоки в зависимости от открытого левого контейнера
  addFeedback.classList.add('feedback-hidden')

  if (!clickedFeedback) {
    leftDocumentFeedback.classList.remove('opacity-left')
  } else {
    pushDocumentFeedback.classList.remove('opacity')
  }
  clickedFeedback = false
}

function bodyClickFeedback(event) {
  if (
    clickedFeedback &&
    !addFeedback.contains(event.target) &&
    !pushFeedbackHeaderChat.contains(event.target) &&
    !pushFeedbackLeftContainerChat.contains(event.target)
  ) {
    hideFeedback()
  }
}

pushFeedbackHeaderChat.addEventListener('click', showFeedback)
pushFeedbackLeftContainerChat.addEventListener('click', showFeedback)
pushClosedFeedback.addEventListener('click', hideFeedback)
pushDocumentFeedback.addEventListener('click', bodyClickFeedback)
leftDocumentFeedback.addEventListener('click', bodyClickFeedback)
