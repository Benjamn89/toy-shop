const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "cartAddItem") {
    return {
      ...state,
      items: action.items,
    };
  }
  return state;
};

export default reducer;
