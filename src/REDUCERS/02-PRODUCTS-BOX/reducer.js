const initialState = {
  pages: 1,
  products: [],
  filter: false,
  productsLength: 11,
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
      productsLength: action.val,
      pages: 1,
    };
  }
  if (action.type === "productsActionTypes") {
    console.log("Should reset the products states");
    return initialState;
  }
  return state;
};

export default reducer;
