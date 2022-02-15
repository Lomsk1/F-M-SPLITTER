'use strict'

const bill = document.getElementById('bill');
const but1 = document.querySelector('.five');
const but2 = document.querySelector('.ten');
const but3 = document.querySelector('.fifteen');
const but4 = document.querySelector('.twenty');
const but5 = document.querySelector('.fifty');
const but6 = document.getElementById('cus');
const people = document.getElementById('people');
const topp = document.getElementById('top');
const down = document.getElementById('down');
const reset = document.getElementById('reset');



for(let i = 1; i <= 6; i++);

but1.addEventListener('click', function(){
    let one = ((bill.value * 5)/100)/people.value;
    let two = (bill.value / people.value) + one;
    topp.textContent = `$${one.toPrecision(1)}`;
    topp.classList.add('marg');
    down.textContent =`$${two.toPrecision(2)}`;
    down.classList.add('marg');
})
but2.addEventListener('click', function(){
    let one = ((bill.value * 10)/100)/people.value;
    let two = (bill.value / people.value) + one;
    topp.textContent = `$${one.toPrecision(1)}`;
    topp.classList.add('marg');
    down.textContent =`$${two.toPrecision(2)}`;
    down.classList.add('marg');
})
but3.addEventListener('click', function(){
    let one = ((bill.value * 15)/100)/people.value;
    let two = (bill.value / people.value) + one;
    topp.textContent = `$${one.toPrecision(1)}`;
    topp.classList.add('marg');
    down.textContent =`$${two.toPrecision(2)}`;
    down.classList.add('marg');
})
but4.addEventListener('click', function(){
    let one = ((bill.value * 25)/100)/people.value;
    let two = (bill.value / people.value) + one;
    topp.textContent = `$${one.toPrecision(2)}`;
    topp.classList.add('marg');
    down.textContent =`$${two.toPrecision(2)}`;
    down.classList.add('marg');
})
but5.addEventListener('click', function(){
    let one = ((bill.value * 50)/100)/people.value;
    let two = (bill.value / people.value) + one;
    topp.textContent = `$${one.toPrecision(2)}`;
    topp.classList.add('marg');
    down.textContent =`$${two.toPrecision(2)}`;
    down.classList.add('marg');
})
but6.addEventListener('input', function(){
    let one = ((bill.value * Number(but6.value))/100)/people.value;
    let two = (bill.value / people.value) + one;
    topp.textContent = `$${one.toPrecision(1)}`;
    topp.classList.add('marg');
    down.textContent =`$${two.toPrecision(2)}`;
    down.classList.add('marg');
});
reset.addEventListener('click', function(){
    topp.textContent = '$0.00';
    down.textContent = '$0.00'
    bill.value = null;
    people.value = null;
    but6.value = null;
})