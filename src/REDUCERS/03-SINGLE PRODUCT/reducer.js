const initialState = {
  quantity: 1,
  price: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "changeQuantity") {
    return {
      ...state,
      quantity: action.val,
    };
  }
  if (action.type === "priceUpdate") {
    return {
      ...state,
      quantity: 1,
      price: action.val,
    };
  }
  return state;
};

export default reducer;
