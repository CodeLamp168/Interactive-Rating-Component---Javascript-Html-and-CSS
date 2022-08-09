
const submit = document.querySelector('.rating-submit');
const buttons = document.querySelectorAll('.rating')
const score = document.querySelector('.result')
const cardOne = document.querySelector('.card1')
const cardTwo = document.querySelector('.card2')

//result defining item
let rating
//set to false to assure submit can not be activated until rating is selected
let isRate = false

//making functional buttons that can be toggled on and off and activates selected class
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    })
    btn.classList.add("selected");
//Adding the value of the buttons into the result html
    rating = btn.value;
    score.innerHTML = rating;
    isRate = true;
  })
})

//submit button that activates classes when isRate = true
submit.addEventListener('click', () => {
  if(isRate) {
    cardOne.classList.add("finished")
    cardTwo.classList.add("thankyou")
  }
})












