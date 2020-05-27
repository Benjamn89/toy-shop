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
