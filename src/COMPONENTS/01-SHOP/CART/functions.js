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
