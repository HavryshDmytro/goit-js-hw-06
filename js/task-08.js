const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const target = event.currentTarget;
  const formData = {};

  if (!target.elements.email.value || !target.elements.password.value) {
    alert('Все поля должны быть заполнены!');
    event.preventDefault();
  } else {
    formData.email = target.elements.email.value;
    formData.password = target.elements.password.value;
    console.log('formData: ', formData);
    target.reset();
  }
});