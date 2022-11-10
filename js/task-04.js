const  counterValue = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const buttonDecrRef = document.querySelector('[data-action="decrement"]')
const buttonincrRef = document.querySelector('[data-action="increment"]')
const valueRef = document.querySelector('#value');

buttonDecrRef.addEventListener('click', function () {
    counterValue.decrement();
    console.log(counterValue);
    valueRef.textContent = counterValue.value;
});

buttonincrRef.addEventListener('click', function () {

    counterValue.increment();
    console.log(counterValue);
    valueRef.textContent = counterValue.value;
});