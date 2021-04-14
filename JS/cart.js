const productTotal = document.querySelector("#total");
const productAmount = document.querySelector("#amount");
const productAmountTxt = document.querySelector("#amount-text");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const cartItemWrapper = document.querySelector("#cart-table-wrapper");

const checkoutProducts = document.querySelector("#products-total");
const checkoutDelivery = document.querySelector("#delivery-total");
const checkoutTotal = document.querySelector("#pricing-total");

const maxAmount = 15;
const deliveryPrice = 25.0;

function getQueryData() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const queryAmount = params.get("amount");
  const queryUnitPrice = params.get("unit-price");

  if (queryAmount !== null && queryUnitPrice !== null) {
    productAmount.innerHTML = queryAmount;

    const amount = parseInt(queryAmount);
    const price = parseInt(queryUnitPrice).toFixed(2);

    pricesCalculator(amount, price, deliveryPrice);

    const result = { amount, price };

    return result;
  } else {
    cartItemWrapper.innerHTML =
      '<p class="empty-cart">Empty cart, no products added yet</p>';

    pricesCalculator(0, 0, 0);
  }
}

document.addEventListener("DOMContentLoaded", () => getQueryData());

minusBtn.addEventListener("click", function () {
  const currentAmount = parseInt(productAmount.innerHTML);

  if (currentAmount !== 1) {
    const newAmount = currentAmount - 1;
    const unitePrice = getQueryData().price;

    productAmount.innerHTML = newAmount;
    pricesCalculator(newAmount, unitePrice, deliveryPrice);
  }
});

plusBtn.addEventListener("click", function () {
  const currentAmount = parseInt(productAmount.innerHTML);

  if (currentAmount < maxAmount) {
    const newAmount = currentAmount + 1;
    const unitePrice = getQueryData().price;

    productAmount.innerHTML = newAmount;
    pricesCalculator(newAmount, unitePrice, deliveryPrice);
  }
});

function pricesCalculator(currAmount, unitPrice, deliveryPrice) {
  let totalPrice = unitPrice * currAmount;

  productTotal.innerHTML = totalPrice.toFixed(2);
  checkoutProducts.innerHTML = totalPrice.toFixed(2);

  checkoutDelivery.innerHTML = deliveryPrice.toFixed(2);
  checkoutTotal.innerHTML = (totalPrice + deliveryPrice).toFixed(2);

  if (currAmount === 1 && productAmountTxt.innerHTML !== "unit") {
    productAmountTxt.innerHTML = "unit";
  }
  if (currAmount > 1 && productAmountTxt.innerHTML !== "units") {
    productAmountTxt.innerHTML = "units";
  }
}

// Hello Jim.

// The <title> tag isn't unique between different pages. It's important that both this and the <meta> description is unique, as it's ultimately what's going to bring clicks to your site. Some images are above the 200kb limit. It's important that the images used are properly sized and below this limit. Loading larger images than required will slow down the load time of your site by a lot.

// The form labels on text inputs (sign in, sign up) doesn't disappear or animate away from view when you start typing. This results in this text overlapping whatever you're typing.

// A lot of great stuff throughout the site. The minimal animations added to hover effects is neat and suits the site. Keep it up!

// https://jsolutions.no/wp-json/wc/store/products
