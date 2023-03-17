let navbar = document.querySelector(".navbar");
let toggle = document.querySelector(".hamburger");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("navbar1");
});

let reloadPage = document.querySelectorAll(".item-nav-bar");
for (let i = 0; i < reloadPage.length; i++) {
  reloadPage[i].addEventListener("click", function () {
    location.reload();
  });
}

let data;
let container = document.querySelector(".container");

async function executePromise() {
  let response = await fetch("https://dummyjson.com/products");
  let json = await response.json();
  data = json;
}

function handleProductClick(event) {
  const productId = event.currentTarget.getAttribute("data-product-title");
  const selectedProduct = data.products.find(
    (product) => product.title === productId
  );

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  // rediriger vers la page suivante
  window.location.href = "singleProduct.html";
}





async function logData() {
  await executePromise();
  let allProduct = "";
  data.products.forEach((values) => {
    allProduct += `
      <div class="product" data-product-title="${values.title}" onclick="handleProductClick(event)">
        <div  class="photo">
          <img src="${values.images[0]}" alt="image of product">
        </div>
        <div  class="title">
          <h2>${values.title}</h2>
        </div>
        <div  class="price">
          <h3>${values.price} €</h3>
        </div>
      </div>
    `;
  });
  container.innerHTML = allProduct;
}

async function sortProducts(sortFunction) {
  await logData();
  let sorted = data.products.slice().sort(sortFunction);
  let sortedProduct = "";
  sorted.forEach((values) => {
    sortedProduct += `
      <div class="product" data-product-title="${values.title}" onclick="handleProductClick(event)">
        <div  class="photo">
          <img src="${values.images[0]}">
        </div>
        <div  class="title">
          <h2>${values.title}</h2>
        </div>
        <div  class="price">
          <h3>${values.price} €</h3>
        </div>
      </div>
    `;
  });
  let sortedContainer = document.createElement("section");
  sortedContainer.innerHTML = sortedProduct;
  sortedContainer.classList.add("container");
  container.replaceWith(sortedContainer);
  container = sortedContainer;
}
// Get data and log all products
executePromise();
logData();
// Sort products by price
function sortByPrice() {
  sortProducts((a, b) => a.price - b.price || a.title.localeCompare(b.title));
}
// Sort products by name
function sortByName() {
  sortProducts((a, b) => a.title.localeCompare(b.title));
}
// Sort products by category
function sortByCategory() {
  sortProducts((a, b) => a.category.localeCompare(b.category));
}
