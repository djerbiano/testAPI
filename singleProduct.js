let navbar = document.querySelector(".navbar");
let toggle = document.querySelector(".hamburger");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("navbar1");
});

let reloadPage = document.querySelectorAll(".item-nav-bar");

for (let i = 0; i < reloadPage.length; i++) {
    reloadPage[i].addEventListener("click", function () {
        window.location.href = "index.html";
    });
}

function dt() {
    // récupérer l'objet de produit à partir du stockage local
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

    // afficher le titre, le prix et l'image du produit

    let main = document.querySelector("main");


    let product = `
    <div class="container-single-product">
        <div class="container-image">
            <div class="image-buy-product">
                <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}" />
            </div>
            <div class="container-other-pictures">
                <div class="other-pictures0"><img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}" /></div>
                <div class="other-pictures1"><img src="${selectedProduct.images[0]}" alt="${selectedProduct.title}" /></div>
                <div class="other-pictures2"><img src="${selectedProduct.images[1]}" alt="${selectedProduct.title}" /></div>
            <div class="other-pictures3"><img src="${selectedProduct.images[2]}" alt="${selectedProduct.title}" /></div>
        </div>
    </div>
    
<div class="container-buy-product">
    <div class="title-buy-product">
        <h1>${selectedProduct.title}</h1>
    </div>
    <div class="description-buy-product">
        <h1>${selectedProduct.description}</h1>
    </div>
    <div class="container-price-buy-product">
        <div class="price-buy-product">
            <h1>${selectedProduct.price} $</h1>
        </div>
        <div class="add-product">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg>
        </div>
    </div>
</div>

</div>
`
    main.innerHTML = product;
}
dt();
// config change pictures full container left

let fullPicture = document.querySelector(".image-buy-product");
let pictureList = document.querySelectorAll("[class^='other-pictures']");

for(let i = 0; i < pictureList.length; i++) {
    pictureList[i].addEventListener("click", () => {
        fullPicture.style.transition = "0.5s"; // Ajout de la transition
        fullPicture.innerHTML = pictureList[i].innerHTML;
    });
}
