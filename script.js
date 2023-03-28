// an attempt was made to use mvc architecture, hoping it's at least close

// model

const submitBtn = document.getElementById('submit-btn');
const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thank-you-card');
const ratingSelection = document.getElementById('rating-selection');
const ratingOptions = document.getElementsByName('rating');
const errorMessage = document.getElementById('error-message')

let selectedOption;


// view

function displaySelection() {
    ratingSelection.textContent = 'You selected ' + selectedOption + ' out of 5';
}

function switchCards() {
    ratingCard.style = 'display: none';
    thankYouCard.style = 'display: block';
}

// controller?

submitBtn.addEventListener('click', function () {

    let isRatingChosen = false;

    for (let i = 0; i < ratingOptions.length; i++) {
        if (ratingOptions[i].checked) {
            isRatingChosen = true;
        }
    }

    if (isRatingChosen === true) {
        switchCards();
        findSelectedOption();
    } else {
        errorMessage.textContent = 'Please choose a rating first!'
    }
})

function findSelectedOption() {
    for (let i = 0; i < ratingOptions.length; i++) {
        if (ratingOptions[i].checked) {
            selectedOption = ratingOptions[i].value;
            displaySelection();
        }
    }
}