const endpoint = "https://jsolutions.no/wp-json/wc/store/products";

const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const amount = document.querySelector("#amount");
const cartBtn = document.querySelector("#add-to-cart");
const image = document.querySelector("#product-image");
const name = document.querySelector("#product-name");
const description = document.querySelector("#product-desc");
const price = document.querySelector("#product-price");

const maxAmount = 15;

let product = null;

fetch(endpoint)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let queryID = findID();

    product = data.filter((prod) => {
      return prod.id == queryID;
    });

    image.src = product[0].images[0].src;
    name.innerHTML = product[0].name;
    description.innerHTML = product[0].description;
    price.innerHTML =
      product[0].prices.price + product[0].prices.currency_prefix;
  })
  .catch((err) => {
    console.log(err);
  });

function findID() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("id");
  return query;
}

minusBtn.addEventListener("click", function () {
  const currentAmount = parseInt(amount.innerHTML);

  if (currentAmount !== 1) {
    amount.innerHTML = currentAmount - 1;
    cartBtn.href = `cart.html?amount=${currentAmount - 1}&unit-price=150.00`;
  }
});

plusBtn.addEventListener("click", function () {
  const currentAmount = parseInt(amount.innerHTML);

  if (currentAmount < maxAmount) {
    amount.innerHTML = currentAmount + 1;
    cartBtn.href = `cart.html?amount=${currentAmount + 1}&unit-price=150.00`;
  }
});
