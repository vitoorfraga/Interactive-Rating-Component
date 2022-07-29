const itensRating = document.querySelectorAll('.rating-option')
itensRating.forEach((element) => {
  element.addEventListener('click', function () {
    itensRating.forEach((element) => {
      element.classList.remove('active')
    })
    element.classList.add('active')

    const selecionarActive = document.getElementsByClassName('active')
    const activeSelectedId = element.id

    // Escrever nota selecionada no HTML
    var $wrapper = document.querySelector('#idselected')
    const HTMLNovo = activeSelectedId
    $wrapper.innerHTML = HTMLNovo;
  })
})

// Abrir menu confirmação
const ratingAsk = document.getElementById('rating-ask')
const ratingConfirmed = document.getElementById('rating-confirmed')

const openRatingConfirmed = document.getElementById('button')

openRatingConfirmed.addEventListener('click', function () {
  ratingAsk.classList.remove('show')
  ratingConfirmed.classList.add('show')
})