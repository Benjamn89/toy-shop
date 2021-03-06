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
  try {
    document
      .querySelector(".cart-payment-inside-div")
      .classList.add("cart-payment-inside-div-out");
    setTimeout(() => {
      document
        .querySelector(".cart-payment")
        .classList.remove("cart-payment-in");
      document
        .querySelector(".cart-payment-inside-div")
        .classList.remove("cart-payment-inside-div-out");
    }, 550);
  } catch {
    console.log("exitPayment err");
  }
};

export const toPayment = () => {
  document.querySelector(".cart-payment").classList.add("cart-payment-in");
  document
    .querySelector(".cart-payment-inside-div")
    .classList.add("cart-payment-inside-div-in");
};

export const enterPayment = () => {
  document
    .querySelector(".cart-payment-btn-p")
    .classList.toggle("cart-payment-btn-p-out");
  document.querySelector(".sk-chase").classList.toggle("sk-chase-in");

  setTimeout(() => {
    exitPayment();
  }, 1100);
};

export const waitForImage = () => {
  const img = document.querySelector(".cart-no-items-img");
  img.addEventListener("load", () => {
    document
      .querySelector(".cart-no-items-div")
      .classList.add("cart-no-items-div-loaded");
    document.querySelector(".sk-circle").classList.add("sk-circle-off");
  });
};
