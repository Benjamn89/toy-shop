const initialState = {
  pages: 1,
  products: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "productsBoxChangePage") {
    return {
      ...state,
      pages: action.val,
    };
  }
  if (action.type === "productsSearch") {
    return action.val;
  }
  return state;
};

export default reducer;
