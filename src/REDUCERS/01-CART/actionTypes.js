const actionTypes = {
  cartAddItem: (items) => {
    return {
      type: "cartAddItem",
      items,
    };
  },
};

export default actionTypes;
