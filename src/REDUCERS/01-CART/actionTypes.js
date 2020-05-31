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
  paymentApproved: () => {
    return {
      type: "paymentApproved",
    };
  },
  resetState: () => {
    return {
      type: "resetState",
    };
  },
};

export default actionTypes;
