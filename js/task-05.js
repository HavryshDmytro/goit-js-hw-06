const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const currentValue = refs.outputName.textContent;

refs.inputName.addEventListener('input', event => {
  refs.outputName.textContent = event.currentTarget.value;
  if (!refs.outputName.textContent) {
    refs.outputName.textContent = currentValue;
  }
});