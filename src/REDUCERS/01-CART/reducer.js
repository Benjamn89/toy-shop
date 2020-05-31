const initialState = {
  items: [],
  payment: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "cartAddItem") {
    return {
      ...state,
      items: action.items,
    };
  }
  if (action.type === "removeItemFromCart") {
    return {
      ...state,
      items: action.items,
    };
  }
  if (action.type === "paymentApproved") {
    return {
      ...state,
      items: [],
      payment: true,
    };
  }
  if (action.type === "resetState") {
    return {
      items: [],
      payment: false,
    };
  }
  return state;
};

export default reducer;
