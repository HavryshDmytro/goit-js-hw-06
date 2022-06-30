const counterValue  = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
     increment() {
        this.value += 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEL = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    valueEL.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    valueEL.textContent = counterValue.value;
}); 
