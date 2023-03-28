// variables for elements (sections, each rating button value; not the buttons themselves, submit button)

// function triggered by onclick submit
  // change one section to display while the other is hidden

// function for when rating button is clicked
  // when rating button is clicked, replace text element on 2nd card with value of button


// model

const submitBtn = document.getElementById('submit-btn');
const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thank-you-card');
const ratingSelection = document.getElementById('rating-selection');

let selectedOption;


// view

submitBtn.addEventListener('click', function() {
    ratingCard.style = 'display: none';
    thankYouCard.style = 'display: block';

    displaySelectedOption();
})

// controller?

function displaySelectedOption() {
    const ratingOptions = document.getElementsByName('rating');
    
    for (let i = 0; i < ratingOptions.length; i++) {
        if (ratingOptions[i].checked) {
            ratingSelection.textContent = 'You selected ' + ratingOptions[i].value + ' out of 5';
        }
    }
}