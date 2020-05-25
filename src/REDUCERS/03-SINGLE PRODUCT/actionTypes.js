const actionTypes = {
  changeQuantity: (val) => {
    return {
      type: "changeQuantity",
      val,
    };
  },
};

export default actionTypes;
