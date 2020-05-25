export const addCart = () => {
  document
    .querySelector(".product-cart-icon")
    .classList.add("product-cart-icon-clear");
  document.querySelector(".i-p-d-i-d-p").classList.add("i-p-d-i-d-p-clear");
  document
    .querySelector(".product-loading-spinner")
    .classList.add("product-loading-spinner-active");

  setTimeout(() => {
    document
      .querySelector(".product-loading-spinner")
      .classList.remove("product-loading-spinner-active");
    document.querySelector(".i-p-d-i-d-p").innerHTML = "Item Added!";
    document.querySelector(".p-i-w-l-i").classList.add("p-i-w-l-i-added");
    document
      .querySelector(".i-p-d-i-d-p")
      .classList.remove("i-p-d-i-d-p-clear");
    document
      .querySelector(".inside-product-input")
      .classList.add("inside-product-input-added");
    document
      .querySelector(".product-checkout-box")
      .classList.add("product-checkout-box-in");
  }, 2000);
};
