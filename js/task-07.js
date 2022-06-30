const slider = document.querySelector('#font-size-control');
const resultText = document.querySelector('#text');

const sliderControl = slider.addEventListener('input', valueEl);

function valueEl(event) { 
    resultText.style.fontSize = event.currentTarget.value + "px";
}
