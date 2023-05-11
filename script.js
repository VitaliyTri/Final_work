const passInputs = document.querySelectorAll('input[type=password]');
const passInput = document.querySelector('.pass');
const passRetype = document.querySelector('.retype');
const submitButton = document.querySelector('.signup__button');

submitButton.addEventListener('click', function (e) {
    if (passRetype.value === passInput.value) {
        passInputs.forEach(element => {
            element.classList.add('access');
            element.classList.remove('error');
        });
        console.log('yeah!!');
    }
    else {
        e.preventDefault();
        passInputs.forEach(element => {
            element.classList.add('error');
        });
        console.log('not ok');
    }
});

const buttons = document.querySelectorAll('.star-input');
const ratingDivEl = document.querySelector('.signup__rating-stars');

buttons.forEach((radio) => {
    radio.addEventListener('change', function () {
        const checkedNumber = document.querySelector('.star-input:checked').value || undefined;

        buttons.forEach(item => {
            const currentLabel = item.previousElementSibling;
            if (item.value <= checkedNumber) {
                currentLabel.classList.add('check');
            } else {
                currentLabel.classList.remove('check');
            }
        });
    });
});
