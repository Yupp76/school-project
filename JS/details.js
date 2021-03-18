const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const amount = document.querySelector('#amount');
const cartBtn = document.querySelector('#add-to-cart');

const maxAmount = 15;

minusBtn.addEventListener('click', function() {
    const currentAmount = parseInt(amount.innerHTML);

    if(currentAmount !== 1) {
        amount.innerHTML = currentAmount - 1;
        cartBtn.href = `cart.html?amount=${currentAmount - 1}&unit-price=150.00`
    }
})

plusBtn.addEventListener('click', function() {
    const currentAmount = parseInt(amount.innerHTML);

    if(currentAmount < maxAmount) {
        amount.innerHTML = currentAmount + 1;
        cartBtn.href = `cart.html?amount=${currentAmount + 1}&unit-price=150.00`
    }
})
