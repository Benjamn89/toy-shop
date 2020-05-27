export const sumPrice = (itemsArr) => {
  var sumArr = [];
  itemsArr.forEach((el) => {
    sumArr.push(el.totalPrice);
  });
  sumArr = sumArr.reduce((a, b) => {
    return a + b;
  }, 0);

  return sumArr;
};

export const removeItem = (index) => {
  document
    .querySelectorAll(".cart-item-div")
    [index].classList.add("cart-item-div-remove");
};

export const exitPayment = () => {
  document
    .querySelector(".cart-payment-inside-div")
    .classList.add("cart-payment-inside-div-out");
  setTimeout(() => {
    document.querySelector(".cart-payment").classList.remove("cart-payment-in");
    document
      .querySelector(".cart-payment-inside-div")
      .classList.remove("cart-payment-inside-div-out");
  }, 400);
};

export const toPayment = () => {
  document.querySelector(".cart-payment").classList.add("cart-payment-in");
  document
    .querySelector(".cart-payment-inside-div")
    .classList.add("cart-payment-inside-div-in");
};
