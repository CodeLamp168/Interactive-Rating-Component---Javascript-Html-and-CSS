
const ratingCard = document.getElementById('js-rating-card')
const thankYouCard = document.getElementById('js-thank-you-card')
const rating = document.querySelectorAll('.rating')
const submit = document.getElementById('js-submit')
const result_text = document.getElementById('js-results')

let ratingValue 

ratingCard.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating_buttons'))
  {
    removeActive()
    e.target.classList.add('active')
    ratingValue = e.target.value;
  }
})

submit.addEventListener('click', (e) => {
  if(ratingValue > 0) {
    result_text.innerHTML = ratingValue
    ratingCard.classList.add('submitted')
    thankYouCard.classList.add('thanks')
  }
})

function removeActive() {
  for(let i = 0; i < rating.length; i++) {
    rating[i].classList.remove('active')
  }
}












