const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onCheckSymbols);

function onCheckSymbols(event) {
  const correctLength = 6;
  if (event.currentTarget.value.length === correctLength) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}