const actionTypes = {
  productsBoxChangePage: (nPage) => {
    return {
      type: "productsBoxChangePage",
      val: nPage,
    };
  },
  productsSearch: (obj) => {
    return {
      type: "productsSearch",
      val: obj,
    };
  },
  toggleFilter: (products) => {
    return {
      type: "toggleFilter",
      val: products,
    };
  },
  resetFromProduct: () => {
    return {
      type: "productsActionTypes",
    };
  },
};

export default actionTypes;
