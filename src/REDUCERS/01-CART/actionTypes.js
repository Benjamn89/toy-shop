const actionTypes = {
  cartAddItem: (items) => {
    return {
      type: "cartAddItem",
      items,
    };
  },
  removeItemFromCart: (items) => {
    return {
      type: "removeItemFromCart",
      items,
    };
  },
};

export default actionTypes;
