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
};

export default actionTypes;
