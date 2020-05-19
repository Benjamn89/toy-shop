const initialState = {
  pages: 1,
  products: [],
  filter: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "productsBoxChangePage") {
    return {
      ...state,
      pages: action.val,
    };
  }
  if (action.type === "productsSearch") {
    return {
      ...state,
      ...action.val,
    };
  }
  if (action.type === "toggleFilter") {
    return {
      ...state,
      filter: !state.filter,
    };
  }
  return state;
};

export default reducer;
